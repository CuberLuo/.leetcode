/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 1. 从后往前找第一个下标 i：满足 nums[i] < nums[i+1]
  // 2. 从后往前找第一个下标 j：满足 nums[j] > nums[i]
  // 3. 交换 nums[i] 和 nums[j]
  // 4. 把 i 后面的区间整体翻转
  let i = nums.length - 2

  while (i >= 0 && nums[i] >= nums[i + 1]) i--
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= i && nums[j] <= nums[i]) j--
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  nums.splice(i + 1, nums.length - i, ...nums.splice(i + 1).reverse())
}
// @lc code=end
nextPermutation([1, 2, 3])
