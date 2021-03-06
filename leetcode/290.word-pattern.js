/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (35.39%)
 * Likes:    695
 * Dislikes: 90
 * Total Accepted:    149.7K
 * Total Submissions: 422.8K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 * 
 */
/**
 * 直接将两个数组变成两个带有数字记忆的字符串
 * 比较两个字符串即可
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let data = {}
  let count = 0
  let map = ''
  let map1 = ''
  for (let i = 0; i < pattern.length; i++) {
    if (!data[pattern[i]]) {
      count++;
      data[pattern[i]] = count;
      map += count
    } else {
      map += data[pattern[i]]
    }
  }
  data = {}
  count = 0;
  str = str.split(' ')
  for (let i = 0; i < str.length; i++) {
    if (!data[str[i]]) {
      count++;
      data[str[i]] = count;
      map1 += count
    } else {
      map1 += data[str[i]]
    }
  }
  return map == map1 ? true : false;
};

