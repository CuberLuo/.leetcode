/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * 
   * @param {number[]} nums 
   * @param {function(number):boolean} checkFun 
   * @returns {number}
   */
  const binSearch = (nums, checkFun) => {
    let l = -1
    let r = nums.length
    while (r - l > 1) {
      let mid = Math.floor((l + r) / 2)
      if (checkFun(mid)) {
        r = mid
      } else {
        l = mid
      }
    }
    return r
  }

  // 第一个大于等于target的元素
  const index1 = binSearch(nums, (index) => nums[index] >= target)
  console.log(index1)
  // 第一个大于target的元素
  const index2 = binSearch(nums, (index) => nums[index] > target)
  if (index1 > nums.length - 1 || nums[index1] !== target) {
    return [-1, -1]
  } else {
    return [index1, index2 - 1]
  }
};
// @lc code=end

searchRange([1], 1)