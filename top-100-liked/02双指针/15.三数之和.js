/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;//重复的target直接跳过
    const curTarget = -nums[i]
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const sum = nums[j] + nums[k]
      if (sum === curTarget) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
        // 跳过重复的
        while (j < k && nums[j] === nums[j - 1]) j++
        while (j < k && nums[k] === nums[k + 1]) k--
      } else {
        if (sum < curTarget) j++
        else k--
      }
    }
  }
  return result
};
// @lc code=end

const nums = [-1, 0, 1, 2, -1, -4]
// [[-1,-1,2],[-1,0,1]]
threeSum(nums)