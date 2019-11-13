/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (59.23%)
 * Likes:    66
 * Dislikes: 5
 * Total Accepted:    2.1K
 * Total Submissions: 3.6K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence.
 * 
 * A subsequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative
 * order of the remaining characters. (eg, "ace" is a subsequence of "abcde"
 * while "aec" is not). A common subsequence of two strings is a subsequence
 * that is common to both strings.
 * 
 * If there is no common subsequence, return 0.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 * 
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let count = 0;
  let data = {}
  let maxCount = 0;
  let curData= {}
  let hasAdd = false;
  for (let i = 0; i < text2.length; i++) {
    let curtext2 = text2[i]
    for (let j = 0; j < text1.length; j++) {
      let curText = text1[j]
      if(data[curText]){
        // count++;
        curData[curText] = data[curText]
        hasAdd =true;
      }
      if (curText == text2[i]) {
        curData
        text2[i]
        count++;
        if(hasAdd) {
          for(let val in curData) {
          count+=curData[val];
          }
        }
        data[curText]=count;
        maxCount = Math.max(maxCount,count)
        count = 0;
        hasAdd =false;
        curData = {}
      }
    }
    count = 0;
  }
  return maxCount;
};




