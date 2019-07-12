/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (35.46%)
 * Likes:    766
 * Dislikes: 417
 * Total Accepted:    305.6K
 * Total Submissions: 860.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is  the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * return its minimum depth = 2.
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
 * @return {number}
 */
var minDepth = function (root) {
  // 空节点返回0
  if (!root) return 0;
  // 节点遍历完成返回1
  if (!root.left && !root.right) {
    return 1;
  }
  // 遍历只有左节点的情况
  if (!root.left) {
    return 1 + minDepth(root.right)
  }
  // 遍历只有右节点的情况
  if (!root.right) {
    return 1 + minDepth(root.left)
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

