/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (47.72%)
 * Likes:    802
 * Dislikes: 150
 * Total Accepted:    241.1K
 * Total Submissions: 504.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
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
 * 二叉树的层序遍历
 * 给定自底向上的层序数据集合
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root == null) return [];
  // 返回结果
  let res = [[root.val]]
  if (root.left == null && root.right == null) return res;
  // 每一层的遍历节点
  let cur = [root]
  // 每一层的数值数组
  let eachLevel = []
  // 每一层的临时节点数组
  let nodes = []

  while (cur.length || nodes.length) {
    let node = cur.shift()
    // 如果有左节点
    if (node.left) {
      nodes.push(node.left)
      eachLevel.push(node.left.val)
    }
    // 如果有右节点
    if (node.right) {
      nodes.push(node.right)
      eachLevel.push(node.right.val)
    }
    // 如果这一层遍历完成
    if (cur.length == 0 && nodes.length !== 0) {
      res.unshift(eachLevel.slice())
      eachLevel = []
      cur = nodes.slice()
      nodes = []
    }
  }
  return res;
};

