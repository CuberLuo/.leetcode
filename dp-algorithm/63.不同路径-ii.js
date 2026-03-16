/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  if (obstacleGrid[0][0] === 1) return 0
  dp[0][0] = 1
  let k = 1
  while (k < n && obstacleGrid[0][k] === 0) dp[0][k++] = 1
  k = 1
  while (k < m && obstacleGrid[k][0] === 0) dp[k++][0] = 1

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (obstacleGrid[i][j] === 1) continue
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
