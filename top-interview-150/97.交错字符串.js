/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const len1 = s1.length
  const len2 = s2.length
  const len3 = s3.length
  if (len1 + len2 !== len3) return false

  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1))
  dp[0][0] = true // s1前0个字符""和s2前0个字符""能组成s3前0个字符""
  // 处理第一列
  for (let i = 1; i < len1 + 1; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
  }
  // 处理第一行
  for (let j = 1; j < len2 + 1; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1]
  }

  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      // 匹配s3前i+j位
      // case1: s3最后一位由s1提供
      const case1 = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]
      // case2: s3最后一位由s2提供
      const case2 = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]
      dp[i][j] = case1 || case2
    }
  }
  return dp[len1][len2]
};
// @lc code=end

const s1 = "aabcc"
const s2 = "dbbca"
const s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))