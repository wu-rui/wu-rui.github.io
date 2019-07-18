/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (72.03%)
 * Likes:    358
 * Dislikes: 45
 * Total Accepted:    82K
 * Total Submissions: 113.8K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  A = A.map((it) => {
    return it = it < 0 ? (0 - it) ** 2 : it ** 2;
  });
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[i]) {
        A[j] = A[j] + A[i]
        A[i] = A[j] - A[i]
        A[j] = A[j] - A[i]
      }
    }
  }
  return A;
};

