/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  let map = new Map()
  let left = 0
  for (let right = 0; right < s.length; right++) {
    const ch = s[right]
    // ch字符出现之前x位置出现过了
    if (map.has(ch)) {
      const x = map.get(ch)
      // 重复字符的位置x在当前窗口内，则将左指针移到到x+1（收缩窗口）
      if (x >= left) left = x + 1
    }
    // 记录ch字符出现的位置
    map.set(ch, right)
    const curLen = right - left + 1
    maxLen = Math.max(maxLen, curLen)
  }
  return maxLen
};
// @lc code=end
console.log(lengthOfLongestSubstring("abba"))
console.log(lengthOfLongestSubstring("tmmzuxt"))
