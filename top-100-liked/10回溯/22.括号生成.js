/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  const parList = ['(', ')']
  const backtrack = (curRes, leftNum, rightNum) => {
    if (leftNum === n && rightNum === n) {
      result.push(curRes)
      return
    }
    for (let i = 0; i < parList.length; i++) {
      if (parList[i] === '(' && leftNum < n) {
        // 左括号数量小于n则加左括号
        backtrack(curRes + parList[i], leftNum + 1, rightNum)
      } else if (parList[i] === ')' && rightNum < leftNum) {
        // 右括号数量<左括号数量则加右括号
        backtrack(curRes + parList[i], leftNum, rightNum + 1)
      }
    }
  }
  backtrack("", 0, 0)
  return result
};
// @lc code=end

