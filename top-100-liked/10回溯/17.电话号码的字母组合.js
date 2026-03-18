/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ]);
  const result = []
  const backtrack = (path, index) => {
    if (path.length === digits.length) {
      result.push(path)
      return
    }
    const letters = map.get(digits[index])
    for (const letter of letters) {
      path = path + letter
      backtrack(path, index + 1)
      path = path.slice(0, path.length - 1)
    }
  }
  backtrack("", 0)
  return result
};
// @lc code=end

