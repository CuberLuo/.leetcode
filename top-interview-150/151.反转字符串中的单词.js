/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(' ')
  const res = new Array()
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== '') {
      res.push(words[i])
    }
  }
  return res.join(' ')
};
// @lc code=end
const s = "a good   example"
reverseWords(s)