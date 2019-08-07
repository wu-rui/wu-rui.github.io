/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (33.75%)
 * Likes:    1708
 * Dislikes: 89
 * Total Accepted:    317.2K
 * Total Submissions: 938.7K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1]
  let j = nums.length - 1
  let i = 0;
  while (i <= j) {
    if (nums[i] == target) {
      res[0] = i;
      res[1] = nums.length - i - 1;
    } else {
      i++;
    }
    if (res[0] !== -1 && nums[j] == target) {
      res[1] = j;
      j = i - 1;
    } else if (res[0] !== -1 && nums[j] !== target) {
      j--;
    }
  }
  return res;
};

