/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  const initNum = x
  let reverseNum = 0
  // 构建一个反转数
  while (x !== 0) {
    reverseNum = reverseNum * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  return reverseNum === initNum
}
// @lc code=end

isPalindrome(123)
