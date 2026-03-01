/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let pA = 0
  let pB = height.length - 1
  let maxArea = 0
  while (pA !== pB) {
    // 面积=短边*距离
    const area = Math.min(height[pA], height[pB]) * (pB - pA)
    if (area > maxArea) maxArea = area
    // 每次固定较长的边，短边指针向内移动
    if (height[pA] < height[pB]) {
      pA++
    } else {
      pB--
    }
  }
  return maxArea
};
// @lc code=end

