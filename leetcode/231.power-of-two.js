/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (42.07%)
 * Likes:    462
 * Dislikes: 127
 * Total Accepted:    235.6K
 * Total Submissions: 559.6K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: true 
 * Explanation: 2^0 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Example 3:
 * 
 * 
 * Input: 218
 * Output: false
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 * 这里需要看进制，
 * 数字n若是2的次方，则一定满足以下条件：
 * 二进制表示下，n最高位为1，其余所有位为0；
 * 二进制表示下，n - 1最高位为0，其余所有位为1（除了n == 1的情况下，n - 1 == 0，即末位为最高位）；
 * n <= 0时一定不是2的次方。
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if ((n & n - 1) == 0) return true;
  return false;
};

