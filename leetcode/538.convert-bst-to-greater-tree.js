/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 *
 * https://leetcode.com/problems/convert-bst-to-greater-tree/description/
 *
 * algorithms
 * Easy (51.88%)
 * Likes:    1391
 * Dislikes: 92
 * Total Accepted:    88.2K
 * Total Submissions: 170K
 * Testcase Example:  '[5,2,13]'
 *
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that
 * every key of the original BST is changed to the original key plus sum of all
 * keys greater than the original key in BST.
 * 
 * 
 * Example:
 * 
 * Input: The root of a Binary Search Tree like this:
 * ⁠             5
 * ⁠           /   \
 * ⁠          2     13
 * 
 * Output: The root of a Greater Tree like this:
 * ⁠            18
 * ⁠           /   \
 * ⁠         20     13
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let count = 0
  function map(root, sum = null) {
    if (root == null) return;
    map(root.left, sum = sum)
    if (sum !== null) {
      sum(root.val)
    } else {
      let cur = root.val;
      root.val = count
      count = count - cur;
    }
    map(root.right, sum = sum)
  }
  map(root, val => count += val)
  map(root)
  return root;
};
var convertBST = function (root) {
  let count = 0
  function map(root) {
    if (root == null) return;
    map(root.right)
    let cur = root.val;
    root.val += count;
    count += cur;
    map(root.left)
  }
  map(root)
  return root;
};

