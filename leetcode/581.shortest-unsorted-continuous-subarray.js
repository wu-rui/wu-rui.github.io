/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 *
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 *
 * algorithms
 * Easy (30.23%)
 * Likes:    1527
 * Dislikes: 72
 * Total Accepted:    73.3K
 * Total Submissions: 241.9K
 * Testcase Example:  '[2,6,4,8,10,9,15]'
 *
 * Given an integer array, you need to find one continuous subarray that if you
 * only sort this subarray in ascending order, then the whole array will be
 * sorted in ascending order, too.  
 * 
 * You need to find the shortest such subarray and output its length.
 * 
 * Example 1:
 * 
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make
 * the whole array sorted in ascending order.
 * 
 * 
 * 
 * Note:
 * 
 * Then length of the input array is in range [1, 10,000].
 * The input array may contain duplicates, so ascending order here means . 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 超级愚蠢的做法，把数组排序后双指针遍历不同的地方
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length < 2) return 0;
  let cur = nums.slice().sort((a, b) => a - b)
  let left = null;
  let right = null;
  for (let i = 0, j = nums.length - 1; i < cur.length; i++ , j--) {
    if (left == null && nums[i] !== cur[i]) left = i
    if (right == null && nums[j] != cur[j]) right = j;
  }
  return left == right ? 0 : right - left + 1;
};

