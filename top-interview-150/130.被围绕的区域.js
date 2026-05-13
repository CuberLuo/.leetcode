/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length
  const n = board[0].length
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return
    board[i][j] = '#'
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  const isEdgePosition = (i, j) => {
    return i === 0 || j === 0 || i === m - 1 || j === n - 1
  }

  // 先把边缘位置的O以及连通O的进行特殊标记
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isEdgePosition(i, j) && board[i][j] === 'O') {
        dfs(i, j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
      else if (board[i][j] === '#') board[i][j] = 'O'
    }
  }
}
// @lc code=end

const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
]
solve(board)
console.log(board)
