/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let i = 0
    const n = nums.length
    const map = new Map()
    while (i < n) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let value = map.get(nums[i])
            map.set(nums[i], value + 1)
        }
        if (map.get(nums[i]) > Math.floor(n / 2)) return nums[i]
        i++
    }
};
// @lc code=end
console.log(majorityElement([2, 2, 1, 1, 1, 1, 1, 2, 2]))
