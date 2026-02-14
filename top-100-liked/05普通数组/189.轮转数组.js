/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length
  const startIndex = nums.length - k
  const arr1 = nums.slice(startIndex)
  const arr2 = nums.slice(0, startIndex)
  // 不能用nums=arr1.concat(arr2)，这个只是引用地址赋值
  nums.splice(0, nums.length, ...arr1.concat(arr2));
};
// @lc code=end
// rotate([1,2,3,4,5,6,7],3)
