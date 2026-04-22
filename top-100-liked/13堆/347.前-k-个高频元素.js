/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 哈希表+桶排序
  const result = []
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) map.set(num, 1)
    else map.set(num, map.get(num) + 1)
  }

  const bucket = []
  for (const [key, value] of map) {
    // 将出现次数作为下标
    if (!bucket[value]) bucket[value] = []
    bucket[value].push(key)
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (!Array.isArray(bucket[i])) continue
    for (const num of bucket[i]) {
      if (result.length === k) break
      result.push(num)
    }
  }

  return result
}
// @lc code=end

const nums = [1, 1, 1, 2, 2, 4, 4, 4, 4, 4]
const k = 2
console.log(topKFrequent(nums, k))
// [1,2]
