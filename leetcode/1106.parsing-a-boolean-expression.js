/*
 * @lc app=leetcode id=1106 lang=javascript
 *
 * [1106] Parsing A Boolean Expression
 *
 * https://leetcode.com/problems/parsing-a-boolean-expression/description/
 *
 * algorithms
 * Hard (58.21%)
 * Likes:    113
 * Dislikes: 6
 * Total Accepted:    4.5K
 * Total Submissions: 7.8K
 * Testcase Example:  '"!(f)"'
 *
 * Return the result of evaluating a given boolean expression, represented as a
 * string.
 * 
 * An expression can either be:
 * 
 * 
 * "t", evaluating to True;
 * "f", evaluating to False;
 * "!(expr)", evaluating to the logical NOT of the inner expression expr;
 * "&(expr1,expr2,...)", evaluating to the logical AND of 2 or more inner
 * expressions expr1, expr2, ...;
 * "|(expr1,expr2,...)", evaluating to the logical OR of 2 or more inner
 * expressions expr1, expr2, ...
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: expression = "!(f)"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: expression = "|(f,t)"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: expression = "&(t,f)"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: expression = "|(&(t,f,t),!(t))"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= expression.length <= 20000
 * expression[i] consists of characters in {'(', ')', '&', '|', '!', 't', 'f',
 * ','}.
 * expression is a valid expression representing a boolean, as given in the
 * description.
 * 
 * 
 */
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let i = 0;
  return parse()
  //解析布尔表达式为一个布尔值
  function parse() {
    if (expression[i] == 't') {
      i++
      return true
    }
    if (expression[i] == 'f') {
      i++
      return false
    }
    if (expression[i] == '!') {
      return parseNot()
    }
    if (expression[i] == '&') {
      return parseAnd()
    }
    if (expression[i] == '|') {
      return parseOr()
    }
    function parseNot() {
      i += 2;
      let val = parse()
      i++;
      return !val;
    }
    function parseAnd() {
      i += 2;
      let res = true
      while (true) {
        let val = parse()
        res = res && val;
        if (expression[i] == ')') {
          i++
          break;
        }
        if (expression[i] == ',') {
          i++
        }
        return res;
      }
    }
    function parseOr() {
      i += 2;
      let res = false
      while (true) {
        let val = parse()
        res = res || val;
        if (expression[i] == ')') {
          i++
          break;
        }
        if (expression[i] == ',') {
          i++
        }
        return res;
      }
    }
  }
};
