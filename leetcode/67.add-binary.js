/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (39.54%)
 * Likes:    1008
 * Dislikes: 198
 * Total Accepted:    313.4K
 * Total Submissions: 792K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let m = a.length - 1;
  let n = b.length - 1;
  let c = '';
  let add = false;
  for (let i = m >= n ? m : n; i >= 0; i--) {
    let a1 = m > -1 ? (+a[m]) : 0;
    let b1 = n > -1 ? (+b[n]) : 0;
    let c1 = a1 + b1;;
    switch (c1) {
      case 0:
        c = (add == true ? '1' : '0') + c;
        add = false;
        break;
      case 1:
        c = (add == true ? '0' : '1') + c;
        break;
      case 2:
        c = (add == true ? '1' : '0') + c;
        add = true;
        break;
      default:
        break;
    }
    m--;
    n--;
  }
  if (add) {
    c = '1' + c;
  }
  return c;
};

