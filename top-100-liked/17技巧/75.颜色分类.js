/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 只有三种颜色（荷兰国旗问题）
  // 定义三个指针
  let l = 0//l左边全是0
  let r = nums.length - 1//r右边全是1
  let i = 0
  while (i <= r) {
    if (nums[i] === 0) {
      [nums[i], nums[l]] = [nums[l], nums[i]]
      l++
      i++
    } else if (nums[i] === 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]]
      r--//注意与右指针元素交换时i不要动
    } else {
      i++
    }
  }
};
// @lc code=end

