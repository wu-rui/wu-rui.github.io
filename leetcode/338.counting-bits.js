/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 *
 * https://leetcode.com/problems/counting-bits/description/
 *
 * algorithms
 * Medium (64.97%)
 * Likes:    1458
 * Dislikes: 110
 * Total Accepted:    175.4K
 * Total Submissions: 269.5K
 * Testcase Example:  '2'
 *
 * Given a non negative integer number num. For every numbers i in the range 0
 * ≤ i ≤ num calculate the number of 1's in their binary representation and
 * return them as an array.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: [0,1,1]
 * 
 * Example 2:
 * 
 * 
 * Input: 5
 * Output: [0,1,1,2,1,2]
 * 
 * 
 * Follow up:
 * 
 * 
 * It is very easy to come up with a solution with run time
 * O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a
 * single pass?
 * Space complexity should be O(n).
 * Can you do it like a boss? Do it without using any builtin function like
 * __builtin_popcount in c++ or in any other language.
 * 
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let res = []
  for (let i = 0; i <= num; i++) {
    let str = i.toString(2);
    let j = 0;
    let count = 0;
    while (j < str.length) {
      if (str[j++] == '1') {
        count++;
      }
    }
    res.push(count)
  }
  return res;
};

