/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const directions = [
    [-1, 0], //上
    [1, 0], //下
    [0, -1], //左
    [0, 1], //右
  ]
  const backtrack = (i, j, curLen) => {
    if (curLen === word.length) return true
    // 越界或字符不匹配
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[curLen]) {
      return false
    }

    let tmp = board[i][j]
    board[i][j] = '#' //走过的格子不能重复走，所以要标记

    for (const [dx, dy] of directions) {
      if (backtrack(i + dx, j + dy, curLen + 1)) return true
    }
    board[i][j] = tmp //回溯
    return false
  }

  // 遍历每一个格子尝试作为起点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) return true
    }
  }
  return false
}
// @lc code=end

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word = 'ABCCED'
console.log(exist(board, word))
