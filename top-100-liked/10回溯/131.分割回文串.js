/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []

  const isCircle = (str) => {
    let i = 0
    let j = str.length - 1
    while (i < j) {
      if (str[i] !== str[j]) {
        return false
      }
      i++
      j--
    }
    return true
  }

  const backtrack = (path, startIndex) => {
    if (startIndex === s.length) {
      result.push([...path])
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      let substr = s.slice(startIndex, i + 1)
      if (isCircle(substr)) {
        path.push(substr)
        backtrack(path, i + 1)
        path.pop()
      }
    }
  }
  backtrack([], 0)
  return result
};
// @lc code=end

console.log(partition("aab"))