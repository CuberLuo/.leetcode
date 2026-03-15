/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let maxIndex = 0
  let cnt = 0
  let result = []
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    cnt++
    maxIndex = Math.max(maxIndex, s.lastIndexOf(ch))
    if (i === maxIndex) {
      result.push(cnt)
      cnt = 0
    }
  }
  return result
};
// @lc code=end
const s = "ababcbacadefegdehijhklij"
const result = partitionLabels(s)
console.log(result)
