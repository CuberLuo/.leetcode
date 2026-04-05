/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // dp[i]代表数字i拆分后的最大乘积
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1//2=1+1
  for (let i = 3; i <= n; i++) {
    // 拆成j和i-j
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
    }
  }
  return dp[n]
};
// @lc code=end

