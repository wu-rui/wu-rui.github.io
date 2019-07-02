/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (53.05%)
 * Likes:    1729
 * Dislikes: 151
 * Total Accepted:    396.9K
 * Total Submissions: 748.1K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let m = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      m = nums[i];
    }
    if (nums[i] === m) {
      count++;
    } else {
      count--;
    }
  }
  return m;
};

