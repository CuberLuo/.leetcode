/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  let maxSum = dp[0]
  for (let i = 1; i < nums.length; i++) {
    // 递推公式 dp[i]是以i为结尾的最大子数组和
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    if (dp[i] > maxSum) maxSum = dp[i]
  }
  // console.log(dp)
  return maxSum
};
// @lc code=end

const nums = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums))