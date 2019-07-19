/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (45.00%)
 * Likes:    154
 * Dislikes: 120
 * Total Accepted:    42.9K
 * Total Submissions: 95.2K
 * Testcase Example:  '100'
 *
 * Given an integer, return its base 7 string representation.
 * 
 * Example 1:
 * 
 * Input: 100
 * Output: "202"
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: -7
 * Output: "-10"
 * 
 * 
 * 
 * Note:
 * The input will be in range of [-1e7, 1e7].
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num == 0) return '0';
  let isadd = num < 0 ? false : true;
  num = num < 0 ? Math.abs(num) : num;
  let str = ''
  while (num) {
    str = num % 7 + str;
    num = (num - num % 7) / 7;
  }
  return isadd == true ? str : '-' + str;
};

