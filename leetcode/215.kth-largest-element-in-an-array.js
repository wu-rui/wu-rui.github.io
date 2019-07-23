/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (48.36%)
 * Likes:    2169
 * Dislikes: 178
 * Total Accepted:    397.4K
 * Total Submissions: 817.2K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 归并排序，先将数组一分为二
 * 递归调用，将数组变成两个两个的模式
 * 再将两个排好序的两个数组，组成一块
 * 最后返回
 * 归并需要一个递归拆分函数，一个换位置函数，
 * 考虑好边界情况
 */
var findKthLargest = function (nums, k) {
  nums = divide(nums)
  return nums[nums.length - k]
};


function divide(nums) {
  let n = nums.length;
  if (n < 2) return nums;
  n = Math.floor(n / 2)
  let left = nums.slice(0, n)
  let right = nums.slice(n)
  return concat(divide(left), divide(right))
}

function concat(left, right) {
  let res = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res;
}






