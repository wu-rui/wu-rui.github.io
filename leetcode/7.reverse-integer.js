/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.37%)
 * Likes:    2239
 * Dislikes: 3442
 * Total Accepted:    724.1K
 * Total Submissions: 2.9M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var isPositive, result;
  var temp = Math.abs(x)
  if (x > 0) {
    isPositive = true
  } else {
    isPositive = false
  }
  var t2 = (temp + '').split('').reverse().join('') - 0
  if (t2 <= 2147483647) return result = isPositive ? t2 : -t2
  return 0;
};

