/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (55.53%)
 * Likes:    3031
 * Dislikes: 189
 * Total Accepted:    367.8K
 * Total Submissions: 655.5K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * 只有两个可能，开始一个新的，闭合一个旧的
 * dfs，
 * @param {number} n
 * @return {string[]}
 * 递归使用
 */
var generateParenthesis = function (n, res = [], cur = '', isClose = false, left = n, right = n) {
  if (n == 0) return [""];
  if (left == 0) {
    for (let i = right; i > 0; i--) {
      cur = cur + ')'
    }
    res.push(cur)
    return cur.slice(0, 2 * n - right - 1)
  } else {
    // 只要加上（，就一定需要一个），当前加上（一定是一个不闭合字符串
    generateParenthesis(n, res, cur + '(', false, left - 1, right)
    // 只有没有闭合的时候才能加 ），而且必须要有前导（
    if (!isClose && left !== n) {
      //isClose是用来判断，是否闭合的，这里提前加上），试试加上）后字符串是否闭合，
      // 若是加上）变成已闭合，需要传递true，下次不能再加）
      // isClose = (n - left == (cur.length - (n - left) + 1))
      isClose = (2 * n == cur.length + 2 * left + 1)
      generateParenthesis(n, res, cur + ')', isClose, left, right - 1)
    }
  }
  return res;
};

var generateParenthesis = function (n, res = [], cur = '', isClose = false, left = n, right = n) {
  if (n == 0) return [""];
  if (left == 0) {
    for (let i = right; i > 0; i--) {
      cur = cur + ')'
    }
    res.push(cur)
    return cur.slice(0, 2 * n - right - 1)
  } else {
    generateParenthesis(n, res, cur + '(', false, left - 1, right)
    if (!isClose && left !== n) {
      isClose = (2 * n == cur.length + 2 * left + 1)
      generateParenthesis(n, res, cur + ')', isClose, left, right - 1)
    }
  }
  return res;
};

/**
 * 
 * @param {*} n 
 */
var generateParenthesis = function (n) {
  let res = [];
  function concat(cur, left, right) {
    if (left == n && right == n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      concat(cur + '(', left + 1, right);
    }
    if (left > right) {
      concat(cur + ')', left, right + 1);
    }
  }
  concat('', 0, 0);
  return res;
};


