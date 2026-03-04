/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // TODO:最优解法是双指针
  // 排序时要加比较函数，否则是字典序排序
  nums.sort((a, b) => a - b)
  const result = new Set()

  for (let i = 0; i < nums.length; i++) {
    // 提前终止：正数不可能凑出和为0（后面的数都是正数）
    if (nums[i] > 0) break;
    // 跳过重复的第一个数
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const map = new Map()
    const target = -nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const num1 = nums[j]
      const num2 = target - num1
      if (map.has(num2)) {
        result.add(JSON.stringify([nums[i], num1, num2]))
      } else {
        map.set(num1, j)
      }
    }
  }
  return Array.from(result).map(item => JSON.parse(item))
};
// @lc code=end

