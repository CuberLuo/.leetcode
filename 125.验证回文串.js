/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isLetter = (ch) => {//用正则表达式判断字符是否为字母
    return /[a-zA-Z]/.test(ch)
  }
  const isNum = (ch) => {
    return /[0-9]/.test(ch)
  }

  let i = 0
  let j = s.length - 1
  let flag = true
  while (i < j) {
    while (!isLetter(s[i]) && !isNum(s[i]) && i < j) i++
    while (!isLetter(s[j]) && !isNum(s[j]) && i < j) j--

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      flag = false
      break
    }
    i++
    j--
  }
  return flag
}
// @lc code=end