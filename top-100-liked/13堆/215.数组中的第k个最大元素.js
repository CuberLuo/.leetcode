/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heapify = (nums, i, heapSize) => {
    let maxIndex = i
    const leftIndex = 2 * i + 1
    const rightIndex = 2 * i + 2
    if (leftIndex < heapSize && nums[leftIndex] > nums[maxIndex]) {
      maxIndex = leftIndex
    }
    if (rightIndex < heapSize && nums[rightIndex] > nums[maxIndex]) {
      maxIndex = rightIndex
    }
    if (maxIndex !== i) {
      [nums[maxIndex], nums[i]] = [nums[i], nums[maxIndex]]
      heapify(nums, maxIndex, heapSize)
    }
  }

  const lastNonLeafIndex = Math.floor(nums.length / 2) - 1
  for (let i = lastNonLeafIndex; i >= 0; i--) {
    heapify(nums, i, nums.length)
  }

  let heapSize = nums.length
  let cnt = 0
  while (cnt < k - 1) {
    [nums[0], nums[heapSize - 1]] = [nums[heapSize - 1], nums[0]]
    heapSize--
    cnt++
    heapify(nums, 0, heapSize)
  }
  return nums[0]
};
// @lc code=end

