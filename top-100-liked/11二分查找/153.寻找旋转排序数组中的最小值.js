/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = -1
  let r = nums.length
  // 前半段>最后一个元素
  // 后半段<=最后一个元素
  while (r - l > 1) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] > nums[nums.length - 1]) {
      l = mid
    } else {
      r = mid
    }
  }
  return nums[r]
};
// @lc code=end
findMin([3, 1, 2])
