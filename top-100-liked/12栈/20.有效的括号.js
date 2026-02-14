/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false
  // 存储匹配括号的哈希表
  const matchMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (matchMap.has(s[i])) {// 右括号
      const topCh = stack.pop()
      if (topCh !== matchMap.get(s[i])) {
        return false
      }
    } else {//左括号
      stack.push(s[i])
    }
  }
  if (stack.length === 0) return true
  else return false

};
// @lc code=end