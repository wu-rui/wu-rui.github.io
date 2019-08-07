/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (33.45%)
 * Likes:    843
 * Dislikes: 97
 * Total Accepted:    115.9K
 * Total Submissions: 346.5K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 * 
 * Example 1:
 * 
 * 
 * Input: "1 + 1"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 2-1 + 2 "
 * Output: 3
 * 
 * Example 3:
 * 
 * 
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 * 加减括号数字和空格
 * 空格：32, 0-9 : 48-57，+：43，-：45，（：40，）：41
 */
var calculate = function (s) {
  let j = 0;
  let count = 1;
  let result = 0;
  let isAdd = true
  for (let i = 0; i < s.length; i++) {
    let charCode = s[i].charCodeAt()
    if (charCode == 40) {
      j = i + 1;;
      while (count != 0) {
        if (s[j] == '(') count++;
        if (s[j] == ')') count--;
        j++;
      }
      count = 1;
      let curr = calculate(s.slice(i + 1, j - 1));
      result = isAdd == true ? result + curr : result - curr
      i = j - 1;
      j = 0;
      isAdd = true;
    } else if (charCode >= 48 && charCode <= 57) {
      let cur = s[i];
      if (i < s.length - 1) {
        j = i + 1;
        while (j < s.length && s[j].charCodeAt() >= 48 && s[j].charCodeAt() <= 57) {
          cur += s[j]
          j++;
        }
        i = j - 1;
        j = 0;
      }
      result = isAdd == true ? result + Number(cur) : result - Number(cur);
      isAdd = true;
    } else if (charCode == 43) {
      isAdd = true
    } else if (charCode == 45) {
      isAdd = false;
    }
  }
  return result;
};

