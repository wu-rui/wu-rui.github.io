/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (39.72%)
 * Likes:    1185
 * Dislikes: 128
 * Total Accepted:    187.9K
 * Total Submissions: 471.3K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 * 这个题的重点在于，每一步只能往下走相邻的节点，也就是不能用求每一行的最小值来判断
 * 但是每一行的最小值可以通过上一行的位置来判断，
 */
var minimumTotal = function (triangle) {
  let num = triangle[0][0];
  let j = 0;
  for (let i = 1; i < triangle.length; i++) {
    let min = null;
    if (j == 0) {
      min = Math.min(triangle[i][j], triangle[i][j + 1])
    } else if (j == triangle[i].length - 1) {
      min = Math.min(triangle[i][j - 1], triangle[i][j])
    } else {
      min = Math.min(triangle[i][j - 1], triangle[i][j], triangle[i][j + 1])
    }
    if (triangle[i][j - 1] && min == triangle[i][j - 1]) {
      j = j - 1;
    } else if (triangle[i][j + 1] && min == triangle[i][j + 1]) {
      j = j + 1;
    }
    num += min;
  }
  return num;
};

