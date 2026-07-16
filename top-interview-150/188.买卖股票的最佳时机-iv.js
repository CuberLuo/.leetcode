/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const buy = new Array(k + 1).fill(-Infinity)
  const sell = new Array(k + 1).fill(0)

  for (const price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(buy[i], sell[i - 1] - price)
      sell[i] = Math.max(sell[i], buy[i] + price)
    }
  }
  return sell[k]
};
// @lc code=end

