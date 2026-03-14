/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let l = -1, r = m * n
  while (r - l > 1) {
    let mid = Math.floor((l + r) / 2)
    let rowIdx = Math.floor(mid / n)
    let colIdx = mid % n

    if (matrix[rowIdx][colIdx] === target) return true
    if (matrix[rowIdx][colIdx] > target) {
      r = mid
    } else {
      l = mid
    }
  }
  return false
};
// @lc code=end

