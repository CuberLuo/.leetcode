/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除了自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = []
  // 前缀之积乘后缀之积
  const prefix = [1]
  const suffix = [1]
  for (let i = 0; i < nums.length - 1; i++) {
    const prefixLast = prefix[prefix.length - 1]
    prefix.push(prefixLast * nums[i])
  }
  for (let i = nums.length - 1; i > 0; i--) {
    const suffixFirst = suffix[0]
    suffix.unshift(suffixFirst * nums[i])
  }
  for (let i = 0; i < nums.length; i++) {
    const res = prefix[i] * suffix[i]
    result.push(res)
  }
  return result
};
// @lc code=end
// const nums = [1, 2, 3, 4]
// 前缀积 [1,1,2,6]
// 后缀积 [24,12,4,1]
const nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums))
