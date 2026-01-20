/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0
    for (let num of nums) {
        if (num !== val) {
            nums[k] = num;
            k++
        }
    }
    return k
};
// @lc code=end

