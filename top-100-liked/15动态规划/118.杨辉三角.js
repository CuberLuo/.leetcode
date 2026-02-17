/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const dp = [[1]]
  for (let i = 1; i < numRows; i++) {
    dp[i] = [1]
    // 第i行中间要生成i-1个数字
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
    dp[i].push(1)
  }
  return dp
};
// @lc code=end
console.log(generate(5))
