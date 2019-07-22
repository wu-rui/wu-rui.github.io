/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 *
 * https://leetcode.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (72.58%)
 * Likes:    502
 * Dislikes: 54
 * Total Accepted:    111.1K
 * Total Submissions: 152.9K
 * Testcase Example:  '[3,1,2,4]'
 *
 * Given an array A of non-negative integers, return an array consisting of all
 * the even elements of A, followed by all the odd elements of A.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let a = []
  let b = []
  for (i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      a.push(A[i])
    } else {
      b.push(A[i])
    }
  }
  return [...a, ...b];
};

