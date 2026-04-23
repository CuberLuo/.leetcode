/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  // dp[i]表示前i个字符是否能拆
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      const substr = s.slice(j, i + 1) //取子串[j,i]
      if (dp[j] && wordSet.has(substr)) {
        dp[i + 1] = true
        break
      }
    }
  }
  return dp[s.length]
}
// @lc code=end

const s = 'applepenapple'
const wordDict = ['apple', 'pen']
console.log(wordBreak(s, wordDict))
