/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (41.98%)
 * Likes:    1281
 * Dislikes: 49
 * Total Accepted:    109.8K
 * Total Submissions: 261.3K
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly
 * the same structure and node values with a subtree of s. A subtree of s is a
 * tree consists of a node in s and all of this node's descendants. The tree s
 * could also be considered as a subtree of itself.
 * 
 * 
 * Example 1:
 * 
 * Given tree s:
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \
 * ⁠1   2
 * 
 * Given tree t:
 * 
 * ⁠  4 
 * ⁠ / \
 * ⁠1   2
 * 
 * Return true, because t has the same structure and node values with a subtree
 * of s.
 * 
 * 
 * Example 2:
 * 
 * Given tree s:
 * 
 * ⁠    3
 * ⁠   / \
 * ⁠  4   5
 * ⁠ / \
 * ⁠1   2
 * ⁠   /
 * ⁠  0
 * 
 * Given tree t:
 * 
 * ⁠  4
 * ⁠ / \
 * ⁠1   2
 * 
 * Return false.
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
 * 居然一次过，
 * 思路就是：先判断两个数是否相等，在判断左子树和t是否相等，再判断右子树是否相等
 * 只要有一个为true就是对的
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (s == null && t == null) return true;
  if ((s == null && t != null) || (s !== null && t == null)) return false;
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};

function isEqual(s, t) {
  if (s == null && t == null) return true;
  if ((s == null && t != null) || (s !== null && t == null)) return false;
  return s.val == t.val && isEqual(s.left, t.left) && isEqual(s.right, t.right)
}
