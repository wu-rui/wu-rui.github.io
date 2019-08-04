/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (39.85%)
 * Likes:    1041
 * Dislikes: 47
 * Total Accepted:    150.5K
 * Total Submissions: 372K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */
/**
 * 经典的八皇后题，任何路线看都只有一个皇后
 * 以n遍历，是因为每个皇后在每行都必须存在，所以他的遍历的情况只能是从0到n
 * 而且有n行，大遍历也是n，当放下一个皇后的时候，n+1，直接到下一行
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let data = []
  function setQueen(n, row = 0, queens = []) {
    if (row == n) {
      // data.push(getArray(queens, n))
      data.push(queens.map(it => ''.padStart(it, '.') + 'Q' + ''.padEnd(n - it - 1, '.')))
      return;
    } else {
      for (let i = 0; i < n; i++) {
        // if (isTrue(queens, i)) {
        if (queens.every((it, n) => it !== i && Math.abs(n - queens.length) != Math.abs(it - i))) {
          queens.push(i)
          setQueen(n, row + 1, queens)
          queens.pop()
        }
      }
    }
  }
  setQueen(n)
  return data;
};

// 给定当前皇后的位置数组和n返回结果
// function getArray(ary, n) {
//   let res = []
//   for (let i = 0; i < n; i++) {
//     res[i] = ''
//     for (let j = 0; j < n; j++) {
//       // ary的第i行，的值是不是j的值
//       ary[i] == j ? res[i] += 'Q' : res[i] += '.';
//     }
//   }
//   return res;
//   // 以下这句话由当前函数简化而来
//   // return ary.map(it => ''.padStart(it, '.') + 'Q' + ''.padEnd(n - it - 1, '.'))
// }
// 给你一个坐标看当前坐标是否合法
// function isTrue(ary, idx) {
//   for (let i in ary) {
//     // 判断列是否重合
//     if (ary[i] == idx) return false;
//     // 如果他俩之间的差值是相等的，即为交叉线重合
//     if (Math.abs(i - ary.length) == Math.abs(ary[i] - idx)) {
//       return false
//     }
//   }
//   return true;
//   // 由当前函数简化而来
//   // return ary.every((it, i) => it !== idx && Math.abs(i - ary.length) != Math.abs(it - idx))
// }


