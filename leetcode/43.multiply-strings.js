/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (30.95%)
 * Likes:    1040
 * Dislikes: 480
 * Total Accepted:    208.2K
 * Total Submissions: 672.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
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
var multiply = function (num1, num2) {
  let n1 = num1.length - 1, n2 = num2.length - 1;
  if (n1 < 0 || n2 < 0) {
    return "";
  }
  let mul = [];
  for (let i = 0; i < (n1 + n2 + 2); i++) {
    mul[i] = 0;
  }
  for (let i = n1; i >= 0; --i) {
    for (let j = n2; j >= 0; --j) {
      let bitmul = Number(num1.charAt(i)) * Number(num2.charAt(j));
      bitmul += mul[i + j + 1];
      mul[i + j] += parseInt(bitmul / 10);
      mul[i + j + 1] = parseInt(bitmul % 10);
    }
  }
  let i = 0;
  while (i < mul.length - 1 && mul[i] == 0) {
    i++;
  }
  let strArr = [];
  for (; i < mul.length; ++i) {
    strArr.push(mul[i]);
  }
  return strArr.join('');
};



