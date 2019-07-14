/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (41.68%)
 * Likes:    1819
 * Dislikes: 50
 * Total Accepted:    234.2K
 * Total Submissions: 559.4K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
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
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length < 1) return null;
  let root = {
    val: preorder[0],
    left: null,
    right: null,
  }
  let i = inorder.indexOf(preorder.shift())
  if (i !== 0) {
    // 中序遍历有左边节点才进
    root.left = buildTree(preorder, inorder.slice(0, i))
  }
  if (i !== inorder.length - 1) {
    // 中序遍历有右边节点才进
    root.right = buildTree(preorder, inorder.slice(i + 1, inorder.length))
  }
  return root;
};

