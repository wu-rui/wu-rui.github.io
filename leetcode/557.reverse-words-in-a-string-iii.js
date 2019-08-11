/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (64.88%)
 * Likes:    662
 * Dislikes: 70
 * Total Accepted:    137.6K
 * Total Submissions: 212.1K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * 
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * 
 * 
 * 
 * Note:
 * In the string, each word is separated by single space and there will not be
 * any extra space in the string.
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = s.split(' ').reduce((result, cur) => {
    return result + cur.split('').reverse().join('') + ' '
  }, '')
  return res.slice(0, res.length - 1)
};

