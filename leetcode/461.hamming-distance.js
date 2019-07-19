/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (70.43%)
 * Likes:    1335
 * Dislikes: 122
 * Total Accepted:    247.1K
 * Total Submissions: 350.6K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Note:
 * 0 ≤ x, y < 2^31.
 * 
 * 
 * Example:
 * 
 * Input: x = 1, y = 4
 * 
 * Output: 2
 * 
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 
 * The above arrows point to positions where the corresponding bits are
 * different.
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).split('').filter(a => a === '1').length

};

