/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = -1
  let r = nums.length
  while (r - l > 1) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return mid
    // 先判断左边有序还是右边有序
    if (nums[l + 1] <= nums[mid]) {//左边有序
      if (nums[l + 1] <= target && target < nums[mid]) {
        r = mid
      } else {
        l = mid
      }
    } else {//右边有序
      if (nums[mid] < target && target <= nums[r - 1]) {
        l = mid
      } else {
        r = mid
      }
    }
  }
  return -1
};
// @lc code=end

