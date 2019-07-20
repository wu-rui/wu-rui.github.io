/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (43.93%)
 * Likes:    426
 * Dislikes: 150
 * Total Accepted:    101.2K
 * Total Submissions: 230.2K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as string, return
 * the sum of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let data = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0,
  }
  num1 = num1.split('');
  num2 = num2.split('');
  let num3 = '';
  let isAdd = 0;
  while (num1.length || num2.length) {
    let num = 0;
    if (num1.length && num2.length) {
      num = data[num1.pop()] + data[num2.pop()] + isAdd
    } else if (!num1.length) {
      num = data[num2.pop()] + isAdd
    } else if (!num2.length) {
      num = data[num1.pop()] + isAdd
    }
    if (num > 9) {
      num = num % 10;
      isAdd = 1;
    } else {
      isAdd = 0;
    }
    num3 = num + num3;
  }
  if (isAdd) {
    num3 = '1' + num3;
  }
  return num3;
};

