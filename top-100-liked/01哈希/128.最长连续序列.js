/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  const numSet = new Set(nums)

  let finalMaxLen = 1
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {//无num-1说明是连续序列起点
      let maxLen = 1
      let curNum = num
      while (numSet.has(curNum + 1)) {
        maxLen++
        curNum++
      }
      if (maxLen > finalMaxLen) finalMaxLen = maxLen
    }
  }
  return finalMaxLen
};
// @lc code=end

const res = longestConsecutive([3, 2, 2, 4, 5])
console.log(res)