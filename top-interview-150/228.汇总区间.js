/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return []
  const result = []
  let tmp = [nums[0]]
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      tmp.push(nums[i + 1])
    } else {
      // result.push(tmp)
      if (tmp.length === 1) result.push(tmp[0].toString())
      else result.push(`${tmp[0]}->${tmp[tmp.length - 1]}`)

      if (nums[i + 1] !== nums[i] + 1) {
        tmp = [nums[i + 1]]
      }
    }
  }
  return result
}
// @lc code=end

// const nums = [0, 2, 3, 4, 6, 8, 9]
const nums = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(nums))
