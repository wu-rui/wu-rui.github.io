/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 * algorithms
 * Easy (49.28%)
 * Likes:    378
 * Dislikes: 594
 * Total Accepted:    58.8K
 * Total Submissions: 119.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty integer array of size n, find the minimum number of moves
 * required to make all array elements equal, where a move is incrementing n -
 * 1 elements by 1.
 * 
 * Example:
 * 
 * Input:
 * [1,2,3]
 * 
 * Output:
 * 3
 * 
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 * 
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 这个题，就是解数组中每个值和最小值的和,一次便利即可
 */
var minMoves = function (nums) {
  let min = nums[0]
  return nums.reduce((res, a) => {
    if (min > a) min = a;
    return res + a
  }, 0) - min * nums.length
};

