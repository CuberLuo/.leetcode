// 完全背包：同一个物品可以选多次
const weights = [2, 3, 4, 5]
const values = [3, 4, 5, 6]
const maxWeight = 8

const dp = new Array(maxWeight + 1).fill(0)

for (let i = 0; i < weights.length; i++) {
  const w = weights[i]
  const v = values[i]
  // 正序遍历
  for (let j = w; j <= maxWeight; j++) {
    dp[j] = Math.max(dp[j], dp[j - w] + v)
  }
}
console.log('最大价值', dp[maxWeight]) // 12
