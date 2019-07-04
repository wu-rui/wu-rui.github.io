/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 *
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (65.80%)
 * Likes:    294
 * Dislikes: 42
 * Total Accepted:    26.5K
 * Total Submissions: 40.2K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * Given an array A of strings made only from lowercase letters, return a list
 * of all characters that show up in all strings within the list (including
 * duplicates).  For example, if a character occurs 3 times in all strings but
 * not 4 times, you need to include that character three times in the final
 * answer.
 * 
 * You may return the answer in any order.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["bella","label","roller"]
 * Output: ["e","l","l"]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["cool","lock","cook"]
 * Output: ["c","o"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 100
 * 1 <= A[i].length <= 100
 * A[i][j] is a lowercase letter
 * 
 * 
 * 双层循环，以数组的第一个字符串的长度为循环条件
 * 遍历第一个字符串的时候，遍历整个数组，
 * 查看是否有其指定的字符，有的话删除，并且加入新的数组中
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let member = [];
  for (let i = 0; i < A[0].length; i++) {
    let cur = A[0][i];
    for (let j = 1; j < A.length; j++) {
      if (A[j].indexOf(cur) == -1) {
        cur = '';
      } else {
        A[j] = A[j].replace(cur, '');
      }
    }
    if (cur !== '') {
      member.push(cur);
    }
  }
  return member;
};

