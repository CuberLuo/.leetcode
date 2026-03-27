/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0

  do {
    slow = nums[slow]//跳一步
    fast = nums[nums[fast]]//跳两步
    // console.log('slow:', slow, 'fast:', fast)
  } while (slow !== fast);//快慢指针在环中相遇

  fast = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }//环的入口就是重复数
  return slow

};
// @lc code=end

const nums = [1, 3, 4, 2, 2]
findDuplicate(nums)