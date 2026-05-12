/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const backtrack = (startIndex, path) => {
    if (path.length === k) {
      result.push([...path])
      return
    }
    for (let i = startIndex; i <= n; i++) {
      if (path.includes(i)) continue
      path.push(i)
      backtrack(i + 1, path)
      path.pop()
    }
  }
  backtrack(1, [])
  return result
}
// @lc code=end
const n = 4
const k = 2
console.log(combine(n, k))
/**
 [
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */
