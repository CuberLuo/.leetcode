/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  // 字符串矩阵转换为数字矩阵
  for (let i = 0; i < m; i++) {
    matrix[i] = matrix[i].map((numStr) => Number(numStr))
  }
  const dp = new Array(m).fill(0).map(() => new Array(n))

  let maxLen = 0
  // 处理第一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = matrix[i][0]
    if (dp[i][0] === 1) maxLen = 1
  }
  // 处理第一行
  for (let j = 1; j < n; j++) {
    dp[0][j] = matrix[0][j]
    if (dp[0][j] === 1) maxLen = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      } else {
        dp[i][j] = 0
      }
      if (dp[i][j] > maxLen) maxLen = dp[i][j]
    }
  }
  console.log(dp)
  return maxLen * maxLen
};
// @lc code=end

// const matrix = [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"]
// ]
// const matrix = [["0", "1"], ["1", "0"]]
// const matrix = [["0"]]
const matrix = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "1", "1", "1"]
]
console.log(maximalSquare(matrix))