/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 *
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (66.56%)
 * Likes:    247
 * Dislikes: 149
 * Total Accepted:    82.2K
 * Total Submissions: 123.5K
 * Testcase Example:  '2'
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding
 * ones, starting from 0 and 1. That is,
 * 
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * 
 * 
 * Given N, calculate F(N).
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 0 ≤ N ≤ 30.
 * 
 */
/**
 * 动态规划自底向上的方法
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let dp = [...Array(N + 1)].map(_ => 1);
  dp[0] = 0;
  if (N > 2) {
    for (let i = 3; i < N + 1; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
    }
  }
  return dp[N]
};



