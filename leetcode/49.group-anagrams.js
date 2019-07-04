/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (47.47%)
 * Likes:    1741
 * Dislikes: 116
 * Total Accepted:    352.7K
 * Total Submissions: 742.4K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output: 
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let data = [];
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    let newS = strs[i].split('').sort().join('');
    let j = data.indexOf(newS);
    if (j !== -1) {
      res[j].push(strs[i]);
    } else {
      data.push(newS)
      res.push([strs[i]]);
    }
  }
  return res;
};

