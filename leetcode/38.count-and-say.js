/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (40.89%)
 * Likes:    831
 * Dislikes: 6423
 * Total Accepted:    298.2K
 * Total Submissions: 724.9K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 这道题讲的是，当前行怎么表示上一行
 * 比如：上一行是1，所以表示上一行就是一个1.当前行就是11，
 * 再比如上一行是11，就是两个1，当前行就是21
 * 再比如，上一行是21，一个2，一个1,当前行就是1211
 * 再比如上一行是1211，一个1，一个2，两个1,111221，
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let i = 1;
  let res = '1'
  if (n == 1) return res;
  while (i++ < n) {
    let cur = ''
    count = 1;
    for (let j = 0; j < res.length; j++) {
      if (j == res.length - 1) {
        cur += `${count}${res[j]}`
      } else {
        if (res[j + 1] == res[j]) {
          count++
        } else {
          cur += `${count}${res[j]}`
          count = 1;
        }
      }
    }
    res = cur;
    cur = ''
  }
  return res;
};

