/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 2
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
};
// @lc code=end

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
const len = removeDuplicates(nums)
for (let i = 0; i < len; i++) {
  console.log(nums[i])
}