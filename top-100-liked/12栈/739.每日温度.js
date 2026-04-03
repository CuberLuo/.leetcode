/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // 使用单调栈找下一个更大的元素
  // 从栈底到栈顶单调递减
  const tLen = temperatures.length
  const stack = []
  const result = new Array(tLen).fill(0)
  for (let i = 0; i < tLen; i++) {
    // 注意栈顶元素不要在循环外取，因为栈长度在变化
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const j = stack.pop()
      result[j] = i - j
    }
    stack.push(i)
  }
  return result
};
// @lc code=end

