/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (52.79%)
 * Likes:    441
 * Dislikes: 549
 * Total Accepted:    367.5K
 * Total Submissions: 696K
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let data = {}
  for (let i = 0; i < nums.length; i++) {
    if (!data[nums[i]]) {
      data[nums[i]] = 1
    } else {
      return true;
    }
  }
  return false;
};

