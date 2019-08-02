/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (31.76%)
 * Likes:    720
 * Dislikes: 297
 * Total Accepted:    146.9K
 * Total Submissions: 458.5K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *  
 * 
 */
/**
 * 返回所有可能的正确的ip地址
 * @param {string} s
 * @return {string[]}
 * test: "25525511135"
 * 循环嵌套做法
 */
var restoreIpAddresses = function (s) {
  // 返回的数组
  let res = []
  for (let i = 1; i < 4; i++) {
    let one = s.slice(0, i)
    for (let j = i + 1; j < i + 4; j++) {
      let two = s.slice(i, j)
      for (let k = j + 1; k < j + 4; k++) {
        let three = s.slice(j, k)
        let four = s.slice(k)
        let cur = [one, two, three, four]
        let rescur = cur.every((it) => {
          let zero = true;
          if (it.length > 1 && it[0] == '0') {
            zero = false;
          }
          return zero && (+it < 256) && it !== ''
        })
        rescur == true ? res.push(cur.join('.')) : '';
      }
    }
  }
  return res;
};

/**
 * 返回所有可能的正确的ip地址
 * @param {string} s
 * @return {string[]}
 * test: "25525511135"
 * 改良版本2
 */
var restoreIpAddresses = function (s) {
  let res = []
  let cur = []
  for (let i = 1; i < 4; i++) {
    let one = s.slice(0, i)
    if (isTrueCode(one)) {
      cur.push(one)
      for (let j = i + 1; j < i + 4; j++) {
        let two = s.slice(i, j)
        if (isTrueCode(two)) {
          cur.push(two)
          for (let k = j + 1; k < j + 4; k++) {
            let three = s.slice(j, k)
            if (isTrueCode(three)) {
              cur.push(three)
              let four = s.slice(k)
              if (isTrueCode(four)) {
                cur.push(four)
                res.push(cur.join('.'));
                cur.pop()
              }
              cur.pop()
            }
          }
          cur.pop()
        }
      }
      cur.pop()
    }
  }
  return res;
};

/**
 * 返回所有可能的正确的ip地址
 * @param {string} s
 * @return {string[]}
 * test: "25525511135"
 * 改良版本3,最快
 * 回溯，递归，dfs
 */
var restoreIpAddresses = function (s, res = [], cur = []) {
  if (cur.length == 3) {
    let str = s.slice()
    if (isTrueCode(str)) {
      cur.push(str)
      res.push(cur.slice().join('.'))
      cur.pop()
    }
    return
  }
  for (let i = 1; i < 4; i++) {
    if (i > s.length) break;
    let str = s.slice(0, i)
    if (isTrueCode(str)) {
      cur.push(str)
      restoreIpAddresses(s.slice(i), res, cur)
      cur.pop()
    }
  }
  return res;
};


function isTrueCode(cur) {
  if (cur.length == 1) return true;
  if (cur !== '' && cur.length > 1 && cur[0] !== '0' && +cur < 256) return true;
  return false;
}
