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
  // TODO:超时需优化
  if (p.length > s.length) return []
  const sortStr = (str) => {
    return str.split('').sort().join('')
  }
  const result = []
  for (let i = 0; i <= s.length - p.length; i++) {
    const substr = s.slice(i, i + p.length)
    if (sortStr(substr) === sortStr(p)) {
      result.push(i)
    }
  }
  return result
};
// @lc code=end

console.log(findAnagrams("cbaebabacd", "abc"))
