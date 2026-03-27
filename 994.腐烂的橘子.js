/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const directions = [
    [-1, 0],//上
    [0, 1],//右
    [1, 0],//下
    [0, -1],//左
  ]
  let rotTime = 0
  let fresh = 0
  const rotQueue = []
  // 统计新鲜橘子数量，将腐烂橘子入队
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++
      } else if (grid[i][j] === 2) {
        rotQueue.push([i, j])
      }
    }
  }
  // BFS逐层感染橘子
  while (rotQueue.length > 0 && fresh > 0) {
    const curRotNum = rotQueue.length
    // 每次遍历队列表示腐烂一层
    for (let i = 0; i < curRotNum; i++) {
      const [x, y] = rotQueue.shift()//取出队首元素
      // 遍历四个方向
      for (const [dx, dy] of directions) {
        const newX = x + dx
        const newY = y + dy
        if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
          grid[newX][newY] = 2
          fresh--
          rotQueue.push([newX, newY])
        }
      }
    }
    rotTime++
  }
  if (fresh > 0) {
    return -1
  } else {
    return rotTime
  }
};
// @lc code=end

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]
console.log(orangesRotting(grid))

