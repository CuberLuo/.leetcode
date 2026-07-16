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
  let minPrice = prices[0]
  let maxPt = 0
  for (const price of prices) {
    // 当前价格比最低价低则更新利润
    if (price < minPrice) minPrice = price
    else {
      const curPt = price - minPrice
      if (curPt > maxPt) maxPt = curPt
    }
  }
  return maxPt
}
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //5
console.log(maxProfit([7, 6, 4, 3, 1])) //0
console.log(maxProfit([1, 2])) //1
