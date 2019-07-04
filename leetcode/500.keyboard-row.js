/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (62.36%)
 * Likes:    402
 * Dislikes: 508
 * Total Accepted:    90.3K
 * Total Submissions: 144.9K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given a List of words, return the words that can be typed using letters of
 * alphabet on only one row's of American keyboard like the image
 * below.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"] 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * 
 * 
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let data = {
    'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
    'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
    'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3,
  };
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let str = words[i].toLowerCase();
    let code = data[str[0]];
    for (let j = 0; j < str.length; j++) {
      if (code != data[str[j]]) {
        code = '';
        break;
      }
    }
    if (code != '') res.push(words[i])
  }
  return res;
};

