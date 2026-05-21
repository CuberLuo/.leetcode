/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], i)
    else {
      const j = map.get(nums[i])
      if (Math.abs(i - j) <= k) return true
      else map.set(nums[i], i)
    }
  }
  return false
}
// @lc code=end
const nums = [1, 0, 1, 1]
const k = 1
console.log(containsNearbyDuplicate(nums, k))
