/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (50.21%)
 * Likes:    1198
 * Dislikes: 39
 * Total Accepted:    391.6K
 * Total Submissions: 779K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 * 
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 * 
 * Example 1:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * Output: false
 * 
 * 
 */
/**
 * Definition for a binary tree no de.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 当节点都遍历完的时候，返回true
  if (p == null && q == null) {
    return true;
  }
  // 当有一个节点遍历完一个没遍历完，就是两个节点不一样，返回false
  if (p == null || q == null) {
    return false;
  }
  // 当两个节点的值不一样的时候返回false
  if (p.val !== q.val) {
    return false;
  }
  // 返回遍历左节点的值和右节点的值的结果，两边都一样，就是对的
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

