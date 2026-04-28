/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 2 === 1) return false //数组和为奇数无法分割
  const maxWeight = sum / 2
  const dp = new Array(maxWeight + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]
    const w = nums[i]
    for (let j = maxWeight; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v)
    }
  }
  return dp[maxWeight] === maxWeight
}
// @lc code=end
// const nums = [1, 5, 11, 5]
const nums = [2, 2, 3, 5] //maxWeight=6  dp[maxWeight]=5
console.log(canPartition(nums))
