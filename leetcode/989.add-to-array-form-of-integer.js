/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 *
 * https://leetcode.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (44.66%)
 * Likes:    128
 * Dislikes: 26
 * Total Accepted:    17.4K
 * Total Submissions: 39.1K
 * Testcase Example:  '[1,2,0,0]\n34'
 *
 * For a non-negative integer X, the array-form of X is an array of its digits
 * in left to right order.  For example, if X = 1231, then the array form is
 * [1,2,3,1].
 * 
 * Given the array-form A of a non-negative integer X, return the array-form of
 * the integer X+K.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: A = [2,7,4], K = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: A = [2,1,5], K = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 * 
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 * 
 * 
 * 
 * 
 * Note：
 * 
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 9
 * 0 <= K <= 10000
 * If A.length > 1, then A[0] != 0
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let add = false;
  for (let i = A.length - 1; i >= 0; i--) {
    if (add) {
      A[i] = A[i] + 1;
      add = false;
    }
    A[i] += K > 0 ? K % 10 : 0;
    if (A[i] >= 10) {
      A[i] = A[i] % 10;
      add = true;
    } else {
      add = false;
    }
    K = (K - K % 10) / 10;
  }
  if (K > 0) {
    while (K > 0) {
      if (add) {
        let n = K % 10 + 1;
        if (n >= 10) {
          n = n % 10;
          add = true;
        } else {
          add = false;
        }
        A.unshift(n);
      } else {
        A.unshift(K % 10);
      }
      K = (K - K % 10) / 10;
    }
  }
  if (add) {
    A.unshift(1);
  }

  return A;
};

