/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let sum = 0
  for (let i = 0; i < 32; i++) {
    const tmp = n & 1
    sum += tmp
    n >>= 1
  }
  return sum
}
// @lc code=end
