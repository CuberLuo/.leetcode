/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  const backtrack = (path, startIndex) => {
    let pathSum = path.reduce((x, y) => x + y, 0)
    if (pathSum > target) {
      return
    }
    if (pathSum == target) {
      result.push([...path])
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      backtrack(path, i)
      path.pop()
    }
  }
  backtrack([], 0)
  return result
};
// @lc code=end
combinationSum([2, 3, 6, 7], 7)
