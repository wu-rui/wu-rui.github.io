/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
 *
 * algorithms
 * Medium (38.85%)
 * Likes:    749
 * Dislikes: 70
 * Total Accepted:    49K
 * Total Submissions: 126.1K
 * Testcase Example:  '"aaabb"\n3'
 *
 * 
 * Find the length of the longest substring T of a given string (consists of
 * lowercase letters only) such that every character in T appears no less than
 * k times.
 * 
 * 
 * Example 1:
 * 
 * Input:
 * s = "aaabb", k = 3
 * 
 * Output:
 * 3
 * 
 * The longest substring is "aaa", as 'a' is repeated 3 times.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s = "ababbc", k = 2
 * 
 * Output:
 * 5
 * 
 * The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is
 * repeated 3 times.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let member = {};
  if (s.length < k) return 0;
  for (i in s) {
    if (s[i] in member) {
      member[s[i]] += 1;
    } else {
      member[s[i]] = 1;
    }
  }
  for (key in member) {
    if (member[key] < k) {
      let code = s.indexOf(key)
      if (code < (s.length / 2)) {
        s = s.split('').splice(0, code).join('');
      } else {
        s = s.split('').splice(code, s.length).join('');
      }
      return longestSubstring(s, k)
    }
  }
  return s.length;
};

