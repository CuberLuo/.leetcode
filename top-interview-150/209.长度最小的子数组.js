/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let sum = 0
  let minLen = Infinity
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    // sum达标后先计算最小长度再尝试收缩左边界
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left]
      left++
    }
  }
  if (minLen === Infinity) return 0
  else return minLen
}
// @lc code=end

const nums = [1, 1, 1, 3]
const target = 4
minSubArrayLen(target, nums)
