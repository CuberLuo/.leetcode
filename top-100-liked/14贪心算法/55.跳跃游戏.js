/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = 0
  // 遍历计算每一个能跳到的最大index
  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) return false
    maxIndex = Math.max(maxIndex, nums[i] + i)
    if (maxIndex >= nums.length - 1) return true
  }
};
// @lc code=end
canJump([2, 3, 1, 1, 4])
