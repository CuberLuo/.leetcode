/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPt = 0
  let minPrice = Infinity
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      const currentPt = prices[i] - minPrice
      maxPt = Math.max(currentPt, maxPt)
    }
  }
  return maxPt
}
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 6, 4, 3, 1])) //0
console.log(maxProfit([1, 2])) //1
