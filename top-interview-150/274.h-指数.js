/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length
  const arr = new Array(n + 1).fill(0)
  // 类似桶排序的统计
  for (const citation of citations) {
    arr[Math.min(citation, n)]++
  }
  // console.log(arr)
  let s = 0
  for (let i = n; i >= 0; i--) {
    s += arr[i]
    // console.log(s)
    if (s >= i) return i
  }
}
// @lc code=end
// const citations = [3, 0, 6, 1, 5]
const citations = [1, 3, 1]
console.log(hIndex(citations))
