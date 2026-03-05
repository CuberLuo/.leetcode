/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return []
  const charToIndex = (ch) => {
    return ch.charCodeAt() - 'a'.charCodeAt()
  }
  const result = []
  const sCountList = new Array(26).fill(0)
  const pCountList = new Array(26).fill(0)
  // 统计当前窗口中每个字符出现的个数
  for (let i = 0; i < p.length; i++) {
    sCountList[charToIndex(s[i])]++
    pCountList[charToIndex(p[i])]++
  }
  if (sCountList.toString() === pCountList.toString()) result.push(0)
  // 移动窗口
  for (let i = 0; i < s.length - p.length; i++) {
    sCountList[charToIndex(s[i])]--
    sCountList[charToIndex(s[i + p.length])]++
    if (sCountList.toString() === pCountList.toString()) result.push(i + 1)
  }

  return result
};
// @lc code=end

console.log(findAnagrams("cbaebabacd", "abc"))
