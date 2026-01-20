/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1 // 指向合并后数组的最后一个位置
  let i = m - 1 // 指向nums1有效元素的最后一个位置
  let j = n - 1 // 指向nums2有效元素的最后一个位置

  // 当nums2还有元素需要合并时
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
}
// @lc code=end
