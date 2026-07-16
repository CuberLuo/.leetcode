/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const k = 2
  const buy = new Array(k + 1).fill(-Infinity)
  const sell = new Array(k + 1).fill(0)

  for (const price of prices) {
    // 吾日k省吾身:今天适合做生意1的买卖吗？...今天适合做生意k的买卖吗？
    for (let i = 1; i <= k; i++) {
      // 上一次赚的钱-当前价格比钱包余额多
      buy[i] = Math.max(buy[i], sell[i - 1] - price)
      sell[i] = Math.max(sell[i], buy[i] + price)
    }
  }
  return sell[k]
};
// @lc code=end
const prices = [3, 3, 5, 0, 0, 3, 1, 4]
console.log(maxProfit(prices))//6
// 3-0 + 4-1 = 6
