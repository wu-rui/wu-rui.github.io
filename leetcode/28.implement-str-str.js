/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (32.60%)
 * Likes:    980
 * Dislikes: 1421
 * Total Accepted:    468.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == '') return 0
  let idx = -1;
  let isMatch = true;
  let n = haystack.length - needle.length + 1;
  for (let i = 0; i < n; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 1; j < needle.length; j++) {
        if (haystack[j + i] !== needle[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        idx = i;
        break;
      }
      isMatch = true;
    }
  }
  return idx;
};

