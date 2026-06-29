/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = -1
  let r = nums.length
  while (r - l > 1) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] < nums[mid + 1]) {
      l = mid
    } else {
      r = mid
    }
  }
  return r
}
// @lc code=end
const nums = [1, 2, 3, 1]
findPeakElement(nums)
