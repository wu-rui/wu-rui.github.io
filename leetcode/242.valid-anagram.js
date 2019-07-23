/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (52.57%)
 * Likes:    769
 * Dislikes: 114
 * Total Accepted:    364.3K
 * Total Submissions: 689.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s == t) return true;
  if (s.length !== t.length) return false;
  s = s.split('')
  t = t.split('')
  for (let i = 0; i < s.length; i++) {
    let n = t.indexOf(s[i])
    if (n > -1) {
      if (t.length == 1) return true;
      if (n == t.length - 1) {
        t.pop()
      } else {
        t[n] = t.pop()
      }
    } else {
      return false;
    }
  }
};

