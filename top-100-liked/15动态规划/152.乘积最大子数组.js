/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let dpMax = [nums[0]] //dpMax[i]：以第i个数字结尾的最大乘积
  let dpMin = [nums[0]] //dpMin[i]：以第i个数字结尾的最小乘积
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(nums[i], dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i])
    dpMin[i] = Math.min(nums[i], dpMax[i - 1] * nums[i], dpMin[i - 1] * nums[i])
    max = Math.max(max, dpMax[i])
  }
  return max
}
// @lc code=end
console.log(maxProduct([2, 3, -2, 4])) //6
console.log(maxProduct([-2, 0, -1])) //0
