/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 * 
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (48.01%)
 * Likes:    1679
 * Dislikes: 118
 * Total Accepted:    302.8K
 * Total Submissions: 629K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 */
/**
 * 动态规划
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let memo = [...Array(n)].map(_ => 1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[j] += memo[j - 1];
    }
  }
  return memo[n - 1];
}

/**
 * 一定超时的回溯算法
 * @param {*} m 
 * @param {*} n 
 */
var uniquePaths = function (m, n) {
  let count = 0;
  let data = []
  function getThere(x, y) {
    if (x == m && y == n) {
      count++;
      return;
    }
    if (x < m) {
      getThere(x + 1, y)
    }
    if (y < n) {
      getThere(x, y + 1)
    }
  }
  getThere(1, 1)
  return count;
};

