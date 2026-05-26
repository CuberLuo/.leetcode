/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 75 = 15*5
  // 75 = 3*25
  // 15+3=18
  let result = 0
  while (n > 0) {
    n = Math.floor(n / 5)
    result += n
  }
  return result
}
// @lc code=end
console.log(trailingZeroes(75))
