/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.71%)
 * Likes:    1422
 * Dislikes: 1357
 * Total Accepted:    487.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let com = '';
  if (strs.length > 0) {
    let str = strs[0].split('');
    for (let i = 0; i < str.length; i++) {
      let isCom = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== isCom) {
          isCom = '';
        }
      }
      if (isCom === '' && i == 0) {
        return isCom;
      } else if (isCom !== '') {
        com += strs[0][i];
      } else if (isCom === '' && i > 0) {
        return com;
      }
    }
  }
  return com;
};

