/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) digits[i] = digits[i] + 1
    else digits[i] = digits[i] + carry
    carry = Math.floor(digits[i] / 10)
    digits[i] = digits[i] % 10
  }
  if (carry !== 0) digits.unshift(carry)
  return digits
}
// @lc code=end
console.log(plusOne([9]))
