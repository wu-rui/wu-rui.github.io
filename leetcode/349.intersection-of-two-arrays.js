/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (55.19%)
 * Likes:    423
 * Dislikes: 835
 * Total Accepted:    230.8K
 * Total Submissions: 416.9K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result must be unique.
 * The result can be in any order.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = []
  let data = {}
  for (let i = 0; i < nums1.length; i++) {
    let n1 = nums1[i]
    for (let j = 0; j < nums2.length; j++) {
      if ((!data[n1]) && n1 == nums2[j]) {
        data[n1] = n1
        res.push(n1)
        break;
      }
    }
  }
  return res;
};

