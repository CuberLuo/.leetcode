/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let cnt = 0
  s = s.trim()
  let i = s.length - 1
  while (i >= 0 && s[i] !== ' ') {
    cnt++
    i--
  }
  return cnt
}
// @lc code=end

const s = '   fly me   to   the moon  '
console.log(lengthOfLastWord(s))
