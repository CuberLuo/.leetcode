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
    let maxprofit = 0
    let minprice = 1e4
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i]
        } else if (prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice
        }
    }
    return maxprofit
};
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))

