/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (32.91%)
 * Likes:    574
 * Dislikes: 368
 * Total Accepted:    172.4K
 * Total Submissions: 523.9K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * 
 * Valid operators are +, -, *, /. Each operand may be an integer or another
 * expression.
 * 
 * Note:
 * 
 * 
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would
 * always evaluate to a result and there won't be any divide by zero
 * operation.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * Output: 22
 * Explanation: 
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * 
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
// ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
var evalRPN = function (tokens) {
  let res = []
  for (let n = 0; n < tokens.length; n++) {
    let char = tokens[n]
    if (char == '+' || char == '-' || char == '*' || char == '/') {
      let cur = res.pop()
      let num = res.length - 1;
      if (char == '+') {
        cur = cur + res[num]
      } else if (char == '-') {
        cur = res[num] - cur
      } else if (char == '*') {
        cur = cur * res[num]
      } else if (char == '/') {
        cur = Math.trunc(res[num] / cur)
      }
      res[num] = cur;
    } else {
      res.push(Number(char))
    }
  }
  return res[0]
};

