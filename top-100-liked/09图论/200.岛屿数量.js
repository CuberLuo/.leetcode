/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0
  // 深度优先搜索（DFS）
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 找到一座岛屿则将其相邻的陆地全部淹没
      if (grid[i][j] === '1') {
        cnt++
        setZero(i, j, grid)
      }
    }
  }
  return cnt
};

function setZero(i, j, grid) {
  // 超出边界或者遇到0则递归结束
  if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  // 上下左右均置为0
  setZero(i - 1, j, grid)
  setZero(i + 1, j, grid)
  setZero(i, j - 1, grid)
  setZero(i, j + 1, grid)
}
// @lc code=end

// const grid = [
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0']
// ]
// console.log(grid[1][-1])//越界元素是undefined


const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]
console.log(numIslands(grid))
