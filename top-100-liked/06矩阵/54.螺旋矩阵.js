/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const calcIndex = (i, j, n) => {
    return i * n + j
  }
  const m = matrix.length
  const n = matrix[0].length
  const visitedSet = new Set()
  const result = []
  const moveArr = [
    [0, 1],//右
    [1, 0],//下
    [0, -1],//左
    [-1, 0]//上
  ]
  let step = 0
  let turnCnt = 0//转向次数
  //0右 1下 2左 3上
  let moveItem = moveArr[turnCnt % 4]
  let i = 0, j = 0
  while (step < m * n) {
    result.push(matrix[i][j])
    visitedSet.add(calcIndex(i, j, n))
    const nextI = i + moveItem[0]
    const nextJ = j + moveItem[1]
    // 超出边界或访问过之前的坐标则转向
    if (matrix[nextI] === undefined ||
      matrix[nextI][nextJ] === undefined ||
      visitedSet.has(calcIndex(nextI, nextJ, n))) {
      turnCnt++
      moveItem = moveArr[turnCnt % 4]
    }
    i += moveItem[0]
    j += moveItem[1]
    step += 1
  }
  return result
};
// @lc code=end
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix))

