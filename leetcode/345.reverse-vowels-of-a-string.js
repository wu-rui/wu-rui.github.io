/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (41.99%)
 * Likes:    417
 * Dislikes: 786
 * Total Accepted:    167.1K
 * Total Submissions: 397.8K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let data = []
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) data.push(s[i])
  }
  for (let j = 0; j < s.length; j++) {
    if (/[aeiou]/i.test(s[j])) {
      res += data.pop()
    } else {
      res += s[j];
    }
  }
  return res;
};

