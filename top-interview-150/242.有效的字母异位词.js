/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const charToIndex = (ch) => {
    return ch.charCodeAt() - 'a'.charCodeAt()
  }
  const arrS = new Array(26).fill(0)
  const arrT = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    arrS[charToIndex(s[i])]++
    arrT[charToIndex(t[i])]++
  }
  return arrS.toString() === arrT.toString()
}
// @lc code=end

const s = 'anagram'
const t = 'nagaram'
console.log(isAnagram(s, t))
