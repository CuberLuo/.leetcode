const weights = [2, 3, 4, 5] // 物品重量
const values = [3, 4, 5, 6] // 物品价值
const maxWeight = 8 // 背包最大承重

// dp[i][j]：前i个物品，容量j的最大价值
const n = weights.length
const dp = new Array(n).fill(0).map(() => {
  return new Array(maxWeight + 1).fill(0)
})

// 从1开始遍历物品个数
for (let i = 1; i <= n; i++) {
  const w = weights[i - 1] //第i个物品的重量
  const v = values[i - 1] //第i个物品的价值
  // 从1开始遍历背包最大承重
  for (let j = 1; j <= maxWeight; j++) {
    if (j < w) {
      //第i个物品装不下
      //最大价值是前i-1个物品在背包容量为j的情况下的最大价值
      dp[i][j] = dp[i - 1][j]
    } else {
      //第i个物品装得下
      dp[i][j] = Math.max(
        dp[i - 1][j], // 不选第i个
        dp[i - 1][j - w] + v, // 选第i个（前i-1个物品在背包容量为j-w的情况下的最大价值+第i个物品的价值v）
      )
    }
  }
}

console.log('最大价值：', dp[n][maxWeight]) // 10
