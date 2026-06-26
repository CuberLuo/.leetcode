/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    const tmp = n & 1
    res <<= 1
    res += tmp
    n >>= 1
  }
  return res
}
// @lc code=end

reverseBits(43261596)
