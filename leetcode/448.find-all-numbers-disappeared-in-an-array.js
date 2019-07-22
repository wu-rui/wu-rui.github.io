/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 *
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (53.63%)
 * Likes:    1737
 * Dislikes: 163
 * Total Accepted:    163.9K
 * Total Submissions: 304.8K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some
 * elements appear twice and others appear once.
 * 
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * 
 * Could you do it without extra space and in O(n) runtime? You may assume the
 * returned list does not count as extra space.
 * 
 * Example:
 * 
 * Input:
 * [4,3,2,7,8,2,3,1]
 * 
 * Output:
 * [5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length + 1;
  let res = [...Array(n).keys()]
  for (let it of nums) {
    if (res[it] == it) {
      res[it] = null;
    }
  }
  for (let j = 0; j < n; j++) {
    let n = res.pop()
    if (n !== null && n !== 0) {
      res.unshift(n)
    }
  }
  return res;
};

