/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1) //最短序列就是每个元素本身
  // dp[i]表示以i为结尾的最长递增子序列长度
  let maxLen = 1
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
}
// @lc code=end

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums))
