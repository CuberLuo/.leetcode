/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散法
  let start = 0
  let maxLen = 0

  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    return r - l - 1
  }

  for (let i = 0; i < s.length; i++) {
    // expand(i,i)表示奇数最长回文子串
    // expand(i,i+1)表示偶数最长回文子串
    const len = Math.max(expand(i, i), expand(i, i + 1))
    if (len > maxLen) {
      maxLen = len
      start = i - Math.floor((len - 1) / 2)
    }
  }
  return s.slice(start, start + maxLen)
}
// @lc code=end
