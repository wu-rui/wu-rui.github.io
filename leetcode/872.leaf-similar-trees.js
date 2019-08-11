/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
 *
 * https://leetcode.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (63.73%)
 * Likes:    426
 * Dislikes: 25
 * Total Accepted:    52.1K
 * Total Submissions: 81.6K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * Consider all the leaves of a binary tree.  From left to right order, the
 * values of those leaves form a leaf value sequence.
 * 
 * 
 * 
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4,
 * 9, 8).
 * 
 * Two binary trees are considered leaf-similar if their leaf value sequence is
 * the same.
 * 
 * Return true if and only if the two given trees with head nodes root1 and
 * root2 are leaf-similar.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * Both of the given trees will have between 1 and 100 nodes.
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
 * 两个树的从左到右的叶子结点是相同的 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let left = mapRoot(root1)
  let right = mapRoot(root2)
  function mapRoot(root, res = []) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      res.push(root.val);
    }
    mapRoot(root.left, res)
    mapRoot(root.right, res)
    return res;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) return false;
  }
  return left.length == right.length ? true : false;
};


