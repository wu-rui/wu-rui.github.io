/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (42.45%)
 * Likes:    2429
 * Dislikes: 325
 * Total Accepted:    424.2K
 * Total Submissions: 998.7K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == undefined || '') return [];
  let data = [
    [null],
    [null],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ]
  let res = []
  digits = digits.split('')
  let last = data[digits[0]]
  if (digits.length == 1) {
    return last;
  }
  for (let i = 1; i < digits.length; i++) {
    res = []
    let cur = data[digits[i]]
    for (let j = 0; j < last.length; j++) {
      for (let k = 0; k < cur.length; k++) {
        let str = last[j] + cur[k]
        res.push(str)
      }
    }
    last = res.slice()
  }
  return res;
};

