/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const backtrack = (path, startIndex) => {
    result.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(path, i + 1)
      path.pop()
    }
  }
  backtrack([], 0)
  return result
};
// @lc code=end
subsets([1, 2, 3])
