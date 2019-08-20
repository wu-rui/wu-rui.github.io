/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (42.88%)
 * Likes:    1567
 * Dislikes: 203
 * Total Accepted:    246.5K
 * Total Submissions: 572.9K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * Given a binary tree, flatten it to a linked list in-place.
 * 
 * For example, given the following tree:
 * 
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 * 
 * 
 * The flattened tree should look like:
 * 
 * 
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
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
 * 坑爹题
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  if (root === null) return root;
  let left = flatten(root.left);
  root.left = null;
  let right = flatten(root.right);
  if (left === null) {
    root.right = right;
  } else {
    let tail = left;
    while (tail.right) {
      tail = tail.right;
    }
    tail.right = right;
    root.right = left;
  }
  return root;
};



