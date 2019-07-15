/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (39.77%)
 * Likes:    917
 * Dislikes: 20
 * Total Accepted:    159.5K
 * Total Submissions: 399.1K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length < 1) return null;
  let root = {
    val: postorder[postorder.length - 1],
    left: null,
    right: null,
  }
  let i = inorder.indexOf(postorder.pop())
  if (i !== 0) {
    // 后序遍历有左边节点才进
    root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  }
  if (i !== inorder.length - 1) {
    // 后序遍历有右边节点才进
    root.right = buildTree(inorder.slice(i + 1, inorder.length), postorder.slice(i, postorder.length))
  }
  return root;
};

