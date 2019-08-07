/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (46.57%)
 * Likes:    777
 * Dislikes: 79
 * Total Accepted:    269K
 * Total Submissions: 573.2K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let i = 0;
  let res = []
  while (i < numRows) {
    let cur = []
    if (i == 0) {
      res.push([1])
    } else if (i == 1) {
      res.push([1, 1])
    } else {
      for (let j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          cur.push(1)
        } else {
          cur.push(res[i - 1][j - 1] + res[i - 1][j])
        }
      }
      res.push(cur)
    }
    i++
  }
  return res;
};

