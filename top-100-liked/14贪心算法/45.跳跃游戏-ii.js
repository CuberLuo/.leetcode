/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0
  let maxIndex = 0
  let curEnd = 0//当前这一步能跳跃到的最远边界
  let cnt = 0
  for (let i = 0; i < nums.length; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i])
    if (i === curEnd) {//到达边界必须得跳
      curEnd = maxIndex
      cnt++
      if (curEnd >= nums.length - 1) break
    }
  }
  return cnt
};
// @lc code=end
console.log(jump([2, 3, 1, 1, 4]))

