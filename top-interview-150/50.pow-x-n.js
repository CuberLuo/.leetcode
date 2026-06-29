/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 快速幂算法
  let ans = 1
  if (n < 0) { // x^-n = (1/x)^n
    n = -n
    x = 1 / x
  }
  while (n > 0) {
    if (n & 1) ans *= x
    x *= x
    n = Math.floor(n / 2)//不要用n>>=1
    // 2147483648>>1=-1073741824
  }
  return ans
};
// @lc code=end
console.log(myPow(2, -2))
