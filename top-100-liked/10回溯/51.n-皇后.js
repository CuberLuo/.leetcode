/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = []
  const backtrack = (row, path) => {
    if (row === n) {
      result.push(formatPath(path, n))
      return
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(row, col, path)) continue
      path.push(col)
      backtrack(row + 1, path)
      path.pop()
    }
  }
  backtrack(0, [])

  return result
}
function isValid(row, col, path) {
  // path [i] ：第 i 行的皇后放置的列数
  for (let tmpRow = 0; tmpRow < row; tmpRow++) {
    const tmpCol = path[tmpRow]
    if (
      col === tmpCol || //同一列
      row - col === tmpRow - tmpCol || //同一主对角线
      row + col === tmpRow + tmpCol //同一副对角线
    ) {
      return false
    }
  }
  return true
}

function formatPath(path) {
  const result = []
  const n = path.length
  for (let i = 0; i < n; i++) {
    const num = path[i]
    const arr = new Array(n).fill('.')
    arr[num] = 'Q'
    result.push(arr.join(''))
  }
  return result
}
// @lc code=end

const n = 4
console.log(solveNQueens(n))
/**
  [
    ['.Q..', '...Q', 'Q...', '..Q.'], 
    ['..Q.', 'Q...', '...Q', '.Q..']
  ]
 
 */
