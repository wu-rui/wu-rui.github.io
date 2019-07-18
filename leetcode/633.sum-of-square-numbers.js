/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.69%)
 * Likes:    349
 * Dislikes: 230
 * Total Accepted:    46.4K
 * Total Subm issions: 142.1K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer c, your task is to decide whether there're two
 * integers a and b such that a^2 + b^2 = c.
 * 
 * Example 1:
 * 
 * 
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: False
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} c
 * @return {boolean}
 * 先求平方根
 */
var judgeSquareSum = function (c) {
  if (c == 0 || c == 1) return true;
  let j = Math.floor(Math.sqrt(c))
  for (let i = 1; i <= j; i++) {
    let b = Math.sqrt(c - i ** 2)
    if (b - Math.floor(b) == 0) return true;
  }
  return false;
};

