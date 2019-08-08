/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/
 *
 * algorithms
 * Medium (52.48%)
 * Likes:    358
 * Dislikes: 30
 * Total Accepted:    35.8K
 * Total Submissions: 68.2K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty integer array, find the minimum number of moves required
 * to make all array elements equal, where a move is incrementing a selected
 * element by 1 or decrementing a selected element by 1.
 * 
 * You may assume the array's length is at most 10,000.
 * 
 * Example:
 * 
 * Input:
 * [1,2,3]
 * 
 * Output:
 * 2
 * 
 * Explanation:
 * Only two moves are needed (remember each move increments or decrements one
 * element):
 * 
 * [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
 * 
 * 
 */
/**
 * 找到数组全变成一个数的最小步数
 * 每一步只能对一个数据进行加一或者减一
 * 解法：找中位数
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = 0
  let n = nums.length
  let cen = nums[Math.floor(n / 2)]
  for (let i = 0; i < n; i++) {
    res += nums[i] < cen ? cen - nums[i] : nums[i] - cen
  }
  return res;
};

