/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 *
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (41.38%)
 * Likes:    1631
 * Dislikes: 79
 * Total Accepted:    195.8K
 * Total Submissions: 471.1K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 * 
 * Example: 
 * 
 * 
 * You may serialize the following tree:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠    / \
 * ⁠   4   5
 * 
 * as "[1,2,3,null,null,4,5]"
 * 
 * 
 * Clarification: The above format is the same as how LeetCode serializes a
 * binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.
 * 
 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return []
  let res = [root.val]
  let nodes = [root]
  let eve = []
  while (nodes.length > 0) {
    let node = nodes.shift()
    if (node.left) {
      res.push(node.left.val)
      eve.push(node.left)
    } else {
      res.push(null)
    }
    if (node.right) {
      res.push(node.right.val)
      eve.push(node.right)
    } else {
      res.push(null)
    }
    if (nodes.length == 0) {
      nodes = eve
      eve = []
    }
  }
  return '' + res;
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == '') return null;
  data = data.split(',');
  let node = {
    val: data[0],
  }
  let nodes = [node];
  let eve = []
  let i = 1;
  while (nodes.length > 0 && i < data.length) {
    let cur = nodes.shift()
    if (data[i] !== '') {
      cur.left = {
        val: data[i],
      }
      eve.push(cur.left)
    } else {
      cur.left = null;
    }
    i++;
    if (i < data.length) {
      if (data[i] !== '') {
        cur.right = {
          val: data[i],
        }
        eve.push(cur.right)
      } else {
        cur.right = null;
      }
    }
    if (nodes.length == 0) {
      nodes = eve;
      eve = [];
    }
    i++;
  }
  return node;
};


