/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dp[i]表示总金额i兑换的最少硬币数量
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  if (dp[amount] === Infinity) return -1
  else return dp[amount]
}
// @lc code=end

const coins = [1, 2, 5]
const amount = 11
console.log(coinChange(coins, amount))
