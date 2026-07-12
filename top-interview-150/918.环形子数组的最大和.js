/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const dpMax = new Array(nums.length)
  const dpMin = new Array(nums.length)
  dpMax[0] = nums[0]
  dpMin[0] = nums[0]
  let maxSum = dpMax[0]
  let minSum = dpMin[0]
  let numsSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] + nums[i], nums[i])
    if (dpMax[i] > maxSum) maxSum = dpMax[i]
    dpMin[i] = Math.min(dpMin[i - 1] + nums[i], nums[i])
    if (dpMin[i] < minSum) minSum = dpMin[i]
    numsSum += nums[i]
  }
  // 数组元素全为负数
  if (maxSum < 0) return maxSum
  // 中间段最大子数组和 or 总和-中间段最小子数组和
  return Math.max(maxSum, numsSum - minSum)
};
// @lc code=end
const nums = [1, 2, 3, 4, 5]
maxSubarraySumCircular(nums)
