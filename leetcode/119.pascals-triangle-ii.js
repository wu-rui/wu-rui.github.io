/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (44.63%)
 * Likes:    528
 * Dislikes: 175
 * Total Accepted:    217.5K
 * Total Submissions: 487K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let last = [1]
  if (rowIndex == 0) return last;
  let cur = [1, 1]
  if (rowIndex == 1) return cur;
  for (let i = 1; i < rowIndex; i++) {
    last = cur.slice()
    for (let j = 1; j < last.length; j++) {
      cur[j] = last[j] + last[j - 1]
    }
    cur.push(1)
  }
  return cur;
};

