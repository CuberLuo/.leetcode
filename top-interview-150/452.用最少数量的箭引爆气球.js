/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => { return a[1] - b[1] })
  let arrowPos = points[0][1]
  let arrowCnt = 1
  for (let i = 1; i < points.length; i++) {
    if (arrowPos < points[i][0]) {
      arrowCnt++
      arrowPos = points[i][1]
    }
  }
  return arrowCnt
};
// @lc code=end

// const points = [[10, 16], [2, 8], [1, 6], [7, 12]]
// const points = [[1, 2], [3, 4], [5, 6], [7, 8]]
const points = [[1, 2], [2, 3], [3, 4], [4, 5]]
findMinArrowShots(points)