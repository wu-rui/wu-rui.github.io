/*
 * @lc app=leetcode id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 *
 * https://leetcode.com/problems/letter-case-permutation/description/
 *
 * algorithms
 * Easy (57.46%)
 * Likes:    698
 * Dislikes: 86
 * Total Accepted:    52.2K
 * Total Submissions: 90K
 * Testcase Example:  '"a1b2"'
 *
 * Given a string S, we can transform every letter individually to be lowercase
 * or uppercase to create another string.  Return a list of all possible
 * strings we could create.
 * 
 * 
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"]
 * 
 * 
 * Note:
 * 
 * 
 * S will be a string with length between 1 and 12.
 * S will consist only of letters or digits.
 * 
 * 
 */
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  let res = []
  let data = {}
  function getStr(str, index) {
    let expr = /[a-zA-z]/g
    expr.lastIndex = index;
    let cur = expr.exec(str)
    if (cur) {
      index = cur.index
      str = str.slice(0, index) + cur[0].toLocaleLowerCase() + str.slice(index + 1)
      getStr(str, expr.lastIndex)
      if (!data[str]) {
        data[str] = str;
        res.push(str)
      }
      str = str.slice(0, index) + cur[0].toLocaleUpperCase() + str.slice(index + 1)
      getStr(str, expr.lastIndex)
      if (!data[str]) {
        data[str] = str;
        res.push(str)
      }
    } else {
      if (!data[S]) {
        data[S] = S;
        res.push(S)
      }
      return;
    }
  }
  getStr(S, 0)
  return res;
};

