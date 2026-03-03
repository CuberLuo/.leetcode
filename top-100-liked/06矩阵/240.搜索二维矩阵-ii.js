/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 起始点为右上角
  let i = 0
  let j = matrix[0].length - 1
  // 用索引范围判断是否超出边界比判断undefined更快
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true
    else if (matrix[i][j] < target) i++
    else j--
  }
  return false
};
// @lc code=end
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
console.log(searchMatrix(matrix, 5))

