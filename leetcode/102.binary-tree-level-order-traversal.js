/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (48.98%)
 * Likes:    1577
 * Dislikes: 43
 * Total Accepted:    397.6K
 * Total Submissions: 809K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
 * @return {number[][]}
 * 迭代做法
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [[root.val]];
  let nodeAry = [root]
  while (nodeAry.length > 0) {
    let nodeAry2 = []
    let eve = [];
    while (nodeAry.length > 0) {
      let curNode = nodeAry.shift();
      if (curNode.left) {
        nodeAry2.push(curNode.left)
        eve.push(curNode.left.val)
      }
      if (curNode.right) {
        nodeAry2.push(curNode.right)
        eve.push(curNode.right.val)
      }
    }
    eve.length > 0 ? res.push(eve) : '';
    nodeAry2.length > 0 ? nodeAry = nodeAry2 : '';
  }
  return res;
};

