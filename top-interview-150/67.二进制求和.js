/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = ''
  // 二进制版高精度加法
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  while (i >= 0 || j >= 0 || carry > 0) {
    const numA = a[i] ? Number(a[i--]) : 0
    const numB = b[j] ? Number(b[j--]) : 0
    const sum = numA + numB + carry
    carry = Math.floor(sum / 2)
    result = (sum % 2) + result
  }
  return result
}
// @lc code=end
const a = '1010'
const b = '1011'
console.log(addBinary(a, b))
