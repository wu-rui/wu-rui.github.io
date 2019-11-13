/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (34.08%)
 * Likes:    771
 * Dislikes: 125
 * Total Accepted:    119.7K
 * Total Submissions: 351.2K
 * Testcase Example:  '"3+2*2"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string contains only non-negative integers, +, -, *, /
 * operators and empty spaces  . The integer division should truncate toward
 * zero.
 * 
 * Example 1:
 * 
 * 
 * Input: "3+2*2"
 * Output: 7
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 3/2 "
 * Output: 1
 * 
 * Example 3:
 * 
 * 
 * Input: " 3+5 / 2 "
 * Output: 5
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let count = []
  // 因为考虑有括号，所以需要
  let res = s.match(/[\+\*\-\/]|\d+/g)
  for (let i = 0; i < res.length; i++) {
    let cur = res[i]
    if (cur !== '+' && cur !== '-' && cur !== '*' && cur !== '/') {
      cur = Number(cur)
      if (res[i + 1] == '*' || res[i + 1] == '/') {
        while (res[i + 1] == '*' || res[i + 1] == '/') {
          res[i + 1] == '*' ? cur = cur * res[i + 2] : cur = Math.floor(cur / res[i + 2])
          i += 2;
        }
      }
    }
    count.push(cur)
  }
  let result = count[0]
  for (let j = 1; j < count.length; j++) {
    count[j++] == '-' ? result += (0 - count[j]) : result += count[j]
  }
  return result;
};

