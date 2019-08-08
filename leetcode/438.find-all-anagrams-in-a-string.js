/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Easy (37.55%)
 * Likes:    1702
 * Dislikes: 133
 * Total Accepted:    133.8K
 * Total Submissions: 354.7K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * 
 * Example 1:
 * 
 * Input:
 * s: "cbaebabacd" p: "abc"
 * 
 * Output:
 * [0, 6]
 * 
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s: "abab" p: "ab"
 * 
 * Output:
 * [0, 1, 2]
 * 
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * 双指针
 * 需要一个数组存放对比的字符，对比到一个删一个，当删完了就是正确的
 * 对比的次数要等于p的长度，而且对比玩之后p的数组为空
 * 再重新赋值，接着往下对比
 * 这个测试用例给了一个页面的a，超时了

var findAnagrams = function (s, p) {
  if (s == p) return [0]
  let n = p.length;
  let res = []
  let cur = p.split('')
  for (let i = 0; i < s.length; i++) {
    let idx = cur.indexOf(s[i])
    if (idx > -1) {
      // 当存在先删掉cur中的对应数值
      cur.splice(idx, 1)
      for (let j = i + 1; j < i + n; j++) {
        idx = cur.indexOf(s[j])
        if (idx > -1) {
          cur.splice(idx, 1)
        }
      }
      if (cur.length == 0) {
        res.push(i)
      }
    }
    cur = p.split('')
  }
  return res;
};
 */


/**
 * 
 * @param {*} s 
 * @param {*} p
 * s: "cbaebabacd" p: "abc"
 * 双指针加上滑动窗口，进一个走一个，每次判断字符串中出现的次数和符号是否相等，
 * 相等之后再次滑动，就判断进来的和出去的是否相同，不相同，接着往下走，如果相同，记一次 
 */
var findAnagrams = function (s, p) {
  // 返回的匹配到的下标的集合
  let res = []
  // 将p字符串分割为数组
  let cur = p.split(' ')
  for (let i = 0; i < s.length; i++) {
    // 是否匹配到
    let isSame = true;
    // p的副本，因为要进行null操作
    let curr = cur
    // 当前找到的值
    let char = s[i]
    // 当前值在p字符串中的下标
    let num = curr.indexOf(char)
    // 当值在p字符串中的时候，才会进入判断，否则跳过
    if (num !== -1) {
      // 匹配到，将对应值赋为null
      curr[num] = null;
      // 再由j匹配下一个字符
      for (let j = i + 1; j < p.length + i; j++) {
        char = s[j]
        num = curr.indexOf(char)
        // 如果下一个值匹配到，继续赋值null
        if (num !== --1) {
          curr[num] = null;
        } else {
          // 没有匹配到的话，让i直接跳过所有遍历过的部分
          // isSame为false
          i = j;
          isSame = false;
          break;
        }
      }
      // 字符串匹配完，如果匹配到整个字符串，
      if (isSame) {
        // 将下标存入结果中
        res.push(i)
        if (s[j] == s[i]) {
          // 如果下一个的值和第一个的值相等就代表，i后面还有一个匹配
          // 将下一个i存入结果
          // 并且i直接加一个
          res.push(++i)
        } else {
          // 如果不相等，直接将i跳到当前的下标
          i = j;
        }
      }
    }
    // 不匹配直接跳过
  }
};

var findAnagrams = function (s, p) {
  let res = []
  let cur = p.split('')
  for (let i = 0; i < s.length; i++) {
    let isSame = true;
    let curr = cur.slice()
    let char = s[i]
    let num = curr.indexOf(char)
    if (num !== -1) {
      curr[num] = null;
      let j = i + 1;
      for (; j < p.length + i; j++) {
        char = s[j]
        num = curr.indexOf(char)
        if (num !== -1) {
          curr[num] = null;
        } else {
          isSame = false;
          break;
        }
      }
      if (isSame) {
        res.push(i)
        if (!cur.includes(s[j])) {
          i = j;
        }
      }
    }
  }
  return res;
};

