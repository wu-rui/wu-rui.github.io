/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (60.52%)
 * Likes:    2555
 * Dislikes: 95
 * Total Accepted:    481.1K
 * Total Submissions: 794.6K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 这个方法是用映射的方式做的
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let member = []
  for (let i = 0; i < nums.length; i++) {
    let code = member.indexOf(nums[i])
    if (code === -1) {
      member.push(nums[i]);
    } else {
      member.splice(code, 1)
    }
  }
  return member[0];
};

