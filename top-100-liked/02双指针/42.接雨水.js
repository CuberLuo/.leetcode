/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0 // 总水量
  let leftMax = 0 // 左边见过的最高
  let rightMax = 0 // 右边见过的最高
  let left = 0 // 左指针
  let right = height.length - 1 // 右指针

  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    // console.log(left, right, leftMax, rightMax)

    // 哪边的最大值更小，就结算哪一边的水
    if (leftMax < rightMax) {
      ans += leftMax - height[left]
      left++
    } else {
      ans += rightMax - height[right]
      right--
    }
    // console.log('ans:', ans)
  }
  return ans
}
// @lc code=end

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))
