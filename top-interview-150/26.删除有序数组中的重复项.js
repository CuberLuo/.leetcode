/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 0
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
        j++
    }
    return i + 1
};
// @lc code=end

