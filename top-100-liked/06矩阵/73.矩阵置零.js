/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowFlagSet = new Set()
  const colFlagSet = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowFlagSet.add(i)
        colFlagSet.add(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 当前元素的行或列被标记过
      if (rowFlagSet.has(i) || colFlagSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
};
// @lc code=end

