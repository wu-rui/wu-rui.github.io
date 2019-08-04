/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (37.46%)
 * Likes:    973
 * Dislikes: 64
 * Total Accepted:    137.7K
 * Total Submissions: 362.6K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let data = getOriginArray(board)
  let isget = true;
  let boxIdx = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]]
  // 所有需要填的数据的坐标集合
  let nullNum = data[3]
  function getSudoku(board, each = 0) {
    if (isget) {
      if (each == nullNum.length) {
        isget = false
        return
      } else {
        let i = nullNum[each][0]
        let j = nullNum[each][1]
        let x = nullNum[each][2]
        let y = (i - boxIdx[x][0]) * 3 + (j - boxIdx[x][1])
        for (let num = 1; num < 10; num++) {
          let curNum = num.toString();
          // if (getNumber(data, i, j, x, curNum) && isget) {
          if (isget && !(data[0][i].concat(data[1][j]).concat(data[2][x]).includes(curNum))) {
            board[i][j] = curNum;
            data[0][i][j] = curNum;
            data[1][j][i] = curNum;
            data[2][x][y] = curNum;
            getSudoku(board, each + 1)
            if (isget) {
              board[i][j] = '.';
              data[0][i][j] = '.';
              data[1][j][i] = '.';
              data[2][x][y] = '.';
            }
          }
        }
      }
    }
  }
  getSudoku(board);
  return board;
};


// 判断数据是否合法
// 难点在于怎么判断当前值在小方块中的合法性
function getNumber(data, i, j, x, s) {
  let allNumber = data[0][i].concat(data[1][j]).concat(data[2][x])
  if (allNumber.indexOf(s) == -1) {
    return true;
  }
  return false;
  // 化简
  // data[0][i].concat(data[1][j]).concat(data[2][x]).includes(s)
}

function getOriginArray(borad) {
  // 这里需要遍历出每行的数据和每列的数据，
  // 并且需要按顺序记录每个.的位置(i,j)
  let row = [...Array(9)].map(_ => []);
  let line = [...Array(9)].map(_ => []);
  let box = [...Array(9)].map(_ => []);
  let nullNum = []
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      let b = borad[i][j]
      let x = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (b !== '.') {
        row[i].push(b)
        line[j].push(b)
        box[x].push(b)
      } else {
        row[i].push('.')
        line[j].push('.')
        box[x].push('.')
        nullNum.push([i, j, x])
      }
    }
  }
  return [row, line, box, nullNum];
}

// var borad = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ]

