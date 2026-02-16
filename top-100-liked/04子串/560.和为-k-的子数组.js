/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 哈希表用于存所有前缀和出现的次数
  const map = new Map()
  map.set(0, 1)
  let cnt = 0
  let prefixSum = 0
  for (const num of nums) {
    prefixSum += num
    //类似于两数之和
    cnt += map.get(prefixSum - k) || 0
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
  }
  return cnt
};
// @lc code=end

console.log(subarraySum([1, 2, 3], 3))
