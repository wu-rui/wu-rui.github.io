/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (52.44%)
 * Likes:    302
 * Dislikes: 122
 * Total Accepted:    104.7K
 * Total Submissions: 197.7K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = 0;

  function setQueen(n, row = 0, eachRes = []) {
    if (row == n) {
      res++;
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (eachRes.every((it, n) => it !== i && Math.abs(n - eachRes.length) != Math.abs(it - i))) {
          eachRes.push(i)
          setQueen(n, row + 1, eachRes)
          eachRes.pop()
        }
      }
    }

  }
  setQueen(n)
  return res;
};

