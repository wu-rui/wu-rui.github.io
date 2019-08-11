/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (77.32%)
 * Likes:    310
 * Dislikes: 1067
 * Total Accepted:    130.6K
 * Total Submissions: 168.9K
 * Testcase Example:  '"Hello"'
 *
 * Implement function ToLowerCase() that has a string parameter str, and
 * returns the same string in lowercase.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "Hello"
 * Output: "hello"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "here"
 * Output: "here"
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt()
    if (code > 64 && code < 91) {
      res += String.fromCharCode(code + 32)
    } else {
      res += str[i]
    }
  }
  return res;
};

