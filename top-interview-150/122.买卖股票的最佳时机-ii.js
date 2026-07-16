/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPt = 0
  for (let i = 1; i < prices.length; i++) {
    // 上涨的利润全部累加
    if (prices[i] > prices[i - 1]) {
      const curPt = prices[i] - prices[i - 1]
      maxPt += curPt
    }
  }
  return maxPt
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4])) //4+3=7
