/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map1 = new Map()
  const map2 = new Map()
  const sList = s.split(' ')
  if (pattern.length !== sList.length) return false
  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i]
    const word = sList[i]

    if (map1.has(ch) && map1.get(ch) !== word) return false
    if (map2.has(word) && map2.get(word) !== ch) return false

    map1.set(ch, word)
    map2.set(word, ch)
  }
  return true
}
// @lc code=end

const pattern = 'abba'
const s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))
