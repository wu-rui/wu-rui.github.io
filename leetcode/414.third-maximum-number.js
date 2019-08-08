/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 *
 * https://leetcode.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (29.12%)
 * Likes:    395
 * Dislikes: 719
 * Total Accepted:    97.2K
 * Total Submissions: 332.8K
 * Testcase Example:  '[3,2,1]'
 *
 * Given a non-empty array of integers, return the third maximum number in this
 * array. If it does not exist, return the maximum number. The time complexity
 * must be in O(n).
 * 
 * Example 1:
 * 
 * Input: [3, 2, 1]
 * 
 * Output: 1
 * 
 * Explanation: The third maximum is 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2]
 * 
 * Output: 2
 * 
 * Explanation: The third maximum does not exist, so the maximum (2) is
 * returned instead.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input: [2, 2, 3, 1]
 * 
 * Output: 1
 * 
 * Explanation: Note that the third maximum here means the third maximum
 * distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let length = nums.length;
  if (length == 1) return nums[0]
  if (length == 2) return Math.max(nums[0], nums[1])
  let max = nums[0];
  let second = null;
  let third = null;
  for (let i = 1; i < length; i++) {
    let n = nums[i]
    if (n > max) {
      // 比最大的大，当前值为最大值
      third = second;
      second = max;
      max = n
    } else if (n < max && (second == null || n > second)) {
      // 比最大的小，比第二大的大，当前值为第二大值，第三大值应该改为前第二大的值
      third = second;
      second = n;
    } else if (n < second && (third == null || n > third)) {
      // 比第二大的小。比第三大的大，当前值为第三大值，
      third = n;
    }
  }
  if (third == null) return max;
  return third;
};
var thirdMax = function (nums) {
  let max = nums[0];
  let second = null;
  let third = null;
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i]
    if (n > max) {
      third = second;
      second = max;
      max = n
    } else if (n < max && (second == null || n > second)) {
      third = second;
      second = n;
    } else if (n < second && (third == null || n > third)) {
      third = n;
    }
  }
  return third == null ? max : third;
};

