/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (49.15%)
 * Likes:    2222
 * Dislikes: 69
 * Total Accepted:    370.8K
 * Total Submissions: 745K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * 这道题是求数组的和为target的所有组合
 * 回溯法解决
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  function getList(data, result, res, cur = [], start = 0) {
    if (result < 0) return
    if (result == 0) {
      res.push(cur.slice())
      return;
    }
    for (let i = start; i < data.length; i++) {
      cur.push(data[i])
      getList(data, result - data[i], res, cur, start)
      cur.pop()
      start = i + 1;
    }
  }
  getList(candidates, target, res)
  return res;
};


