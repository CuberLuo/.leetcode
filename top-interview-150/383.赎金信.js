/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (const ch of magazine) {
    map.set(ch, (map.get(ch) || 0) + 1)
  }
  for (const ch of ransomNote) {
    // 没有ch或已消耗完
    if (!map.get(ch)) return false
    else map.set(ch, map.get(ch) - 1)
  }
  return true
}
// @lc code=end

const ransomNote = 'aa'
const magazine = 'aab'
console.log(canConstruct(ransomNote, magazine))
