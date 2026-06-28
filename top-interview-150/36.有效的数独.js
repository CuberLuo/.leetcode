/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Set())
  const cols = new Array(9).fill(0).map(() => new Set())
  const boxes = new Array(9).fill(0).map(() => new Set())
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 得到宫格索引
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      const item = board[i][j]
      if (item === '.') continue
      if (rows[i].has(item) || cols[j].has(item) || boxes[boxIndex].has(item)) {
        return false
      }
      rows[i].add(item)
      cols[j].add(item)
      boxes[boxIndex].add(item)
    }
  }
  return true
}
// @lc code=end
