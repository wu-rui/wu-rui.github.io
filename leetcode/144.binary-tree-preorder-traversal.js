/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (51.70%)
 * Likes:    814
 * Dislikes: 41
 * Total Accepted:    352K
 * Total Submissions: 679.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,2,3]
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 * 递归做法

var preorderTraversal = function (root) {
  let pre = []
  function preOrder(root) {
    if (root) {
      pre.push(root.val)
      preOrder(root.left)
      preOrder(root.right)
    }
  }
  preOrder(root)
  return pre;
};
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代做法
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const ret = [];
  const stack = [root];
  let t = stack.pop();
  while (t) {
    ret.push(t.val);
    if (t.right) {
      stack.push(t.right);
    }
    if (t.left) {
      stack.push(t.left);
    }
    t = stack.pop();
  }
  return ret;
};


