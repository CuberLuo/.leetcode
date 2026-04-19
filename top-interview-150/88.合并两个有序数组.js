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
  const a = nums1.slice(0, m)
  const b = nums2.slice(0, n)
  const mergedArr = mergeFn(a, b)
  for (let i = 0; i < mergedArr.length; i++) {
    nums1[i] = mergedArr[i]
  }
};

function mergeFn(a, b) {
  if (a.length === 0) return b
  else if (b.length === 0) return a
  if (a[0] < b[0]) return [a[0], ...mergeFn(a.slice(1), b)]
  else return [b[0], ...mergeFn(a, b.slice(1))]
}
// @lc code=end

