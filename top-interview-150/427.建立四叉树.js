/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const dfs = (x, y, l) => {
    let value = grid[x][y]
    let isSame = true
    for (let i = x; i < x + l && isSame; i++) {
      for (let j = y; j < y + l && isSame; j++) {
        if (grid[i][j] !== value) isSame = false
      }
    }

    if (isSame) return new _Node(value, true)
    let h = l / 2
    return new _Node(1, false,
      dfs(x, y, h),
      dfs(x, y + h, h),
      dfs(x + h, y, h),
      dfs(x + h, y + h, h)
    )
  }
  return dfs(0, 0, grid.length)
};
// @lc code=end

const grid =
  [
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0]
  ]
