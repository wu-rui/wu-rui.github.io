/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 *
 * https://leetcode.com/problems/simplify-path/description/
 *
 * algorithms
 * Medium (29.29%)
 * Likes:    477
 * Dislikes: 1295
 * Total Accepted:    159.6K
 * Total Submissions: 543.6K
 * Testcase Example:  '"/home/"'
 *
 * Given an absolute path for a file (Unix-style), simplify it. Or in other
 * words, convert it to the canonical path.
 * 
 * In a UNIX-style file system, a period . refers to the current directory.
 * Furthermore, a double period .. moves the directory up a level. For more
 * information, see: Absolute path vs relative path in Linux/Unix
 * 
 * Note that the returned canonical path must always begin with a slash /, and
 * there must be only a single slash / between two directory names. The last
 * directory name (if it exists) must not end with a trailing /. Also, the
 * canonical path must be the shortest string representing the absolute
 * path.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "/home/"
 * Output: "/home"
 * Explanation: Note that there is no trailing slash after the last directory
 * name.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "/../"
 * Output: "/"
 * Explanation: Going one level up from the root directory is a no-op, as the
 * root level is the highest level you can go.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "/home//foo/"
 * Output: "/home/foo"
 * Explanation: In the canonical path, multiple consecutive slashes are
 * replaced by a single one.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "/a/./b/../../c/"
 * Output: "/c"
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "/a/../../b/../c//.//"
 * Output: "/c"
 * 
 * 
 * Example 6:
 * 
 * 
 * Input: "/a//b////c/d//././/.."
 * Output: "/a/b/c"
 * 
 * 
 */
/**
 * 
 * 有几个简化规范
 * ..是返回上一级
 * 多个/在一起只能是一个/
 * 最后的/不需要
 * 必须以/开头
 * @param {string} path
 * @return {string}
 * 复杂但是好写的
 */
var simplifyPath = function (path) {
  if (path[0] !== '/') return ''
  path = path.split('/')
  let map = path.reduce((ary, it) => {
    if (it == '' || it == '.' || it == '..') {
      if (ary.length > 0 && it == '..') {
        ary.pop()
      }
    } else {
      ary.push(it)
    }
    return ary
  }, [])
  if (map.length == 0) return '/'
  return map.reduce((res, it) => {
    return res + '/' + it
  }, '')
};

