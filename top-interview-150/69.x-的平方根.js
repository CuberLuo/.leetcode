/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let n = x
  while (n * n > x) {
    // 牛顿迭代法
    n = Math.floor(n - (n * n - x) / (2 * n)) //原始公式
  }
  return n
}
// @lc code=end
console.log(mySqrt(5))
