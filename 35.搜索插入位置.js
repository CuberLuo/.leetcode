/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length
  let l = -1
  let r = n
  while (r - l > 1) {
    const mid = Math.floor((l + r) / 2)
    if (isExist(nums[mid], target)) {
      r = mid
    } else {
      l = mid
    }
  }
  return r
};
var isExist = function (num1, num2) {
  return num1 >= num2
}
// @lc code=end

