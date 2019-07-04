/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.28%)
 * Likes:    11081
 * Dislikes: 377
 * Total Accepted:    1.9M
 * Total Submissions: 4.3M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 这里用映射解决问题,这个做法只对于有且仅有两个数的和在数组中的时候有效果
  let member = {};
  for (let i = 0; i < nums.length; i++) {
    let half = target - nums[i];
    if (half in member) {
      return [member[half], i];
    } else {
      member[nums[i]] = i;
    }
  }
};

