const weights = [2, 3, 4, 5] // 物品重量
const values = [3, 4, 5, 6] // 物品价值
const maxWeight = 8 // 背包最大承重

const n = weights.length
const dp = new Array(maxWeight + 1).fill(0)
// dp[j]：背包容量为j时能装下的最大价值

for (let i = 1; i <= n; i++) {
  console.log(`前${i}个物品`)
  const w = weights[i - 1]
  const v = values[i - 1]
  console.log(`更新dp下标：${maxWeight}→${w}`)
  for (let j = maxWeight; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v)
  }
  console.log(JSON.stringify(dp))
}
console.log('最大价值：', dp[maxWeight]) //10
