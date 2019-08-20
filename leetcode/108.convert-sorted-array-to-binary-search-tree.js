/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (51.96%)
 * Likes:    1310
 * Dislikes: 135
 * Total Accepted:    284.8K
 * Total Submissions: 547.2K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * 注意要变成一个排序的平衡二叉树（烦人）
 * 所以这个做法是不行的
 * @param {number[]} nums
 * @return {TreeNode}
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  let cen = Math.floor(nums.length / 2)
  let node = new TreeNode(nums[cen])
  node.left = getTree(nums.slice(0, cen), true)
  node.right = getTree(nums.slice(cen + 1), false)
  function getTree(num, isLeft) {
    if (num.length == 0) return null;
    let cur = []
    let first = new TreeNode(num[num.length - 1])
    cur.push(first)
    for (let i = num.length - 2; i > -1; i--) {
      let node = cur.shift()
      node.left = new TreeNode(num[i])
      cur.push(node.left)
      if (i - 1 > -1) {
        node.right = new TreeNode(num[--i])
        cur.push(node.right)
      }
    }
    return first;
  }
  return node;
};
*/



// 居然这样做的，气死我了
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  let cen = Math.floor(nums.length / 2)
  let node = new TreeNode(nums[cen])
  node.left = sortedArrayToBST(nums.slice(0, cen))
  node.right = sortedArrayToBST(nums.slice(cen + 1))
  return node;
};


