/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 *
 * https://leetcode.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (52.69%)
 * Likes:    330
 * Dislikes: 206
 * Total Accepted:    89.7K
 * Total Submissions: 170.1K
 * Testcase Example:  '"USA"'
 *
 * Given a word, you need to judge whether the usage of capitals in it is right
 * or not.
 * 
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 * 
 * 
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 * 
 * Otherwise, we define that this word doesn't use capitals in a right way.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "USA"
 * Output: True
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "FlaG"
 * Output: False
 * 
 * 
 * 
 * 
 * Note: The input will be a non-empty word consisting of uppercase and
 * lowercase latin letters.
 * 
 */
/**
 * 判断单词中的大写字母是否使用正确
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let n = '';
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let code = word[i].charCodeAt()
    if (code < 91 && code > 64) {
      // 大写
      n += '1'
      count += 1;
    } else {
      n += '0'
      count += 0;
    }
  }
  // 全为小写
  if (count == 0) return true
  // 全为大写
  if (count == word.length) return true;
  // 首字母大写
  if (n == '1'.padEnd(word.length, '0')) return true
  return false;
};

