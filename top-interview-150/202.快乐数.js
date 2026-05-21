/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 计算平方和
  const getSum = (num) => {
    let sum = 0
    while (num !== 0) {
      let tmp = num % 10
      num = Math.floor(num / 10)
      sum += Math.pow(tmp, 2)
    }
    return sum
  }

  const set = new Set()
  while (n !== 1) {
    if (!set.has(n)) set.add(n)
    else return false
    n = getSum(n)
  }
  return true
}
// @lc code=end
console.log(isHappy(16))
