/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  let i = 0
  while (i < s.length) {
    let subStr = ''
    if (i < s.length - 1) subStr = s.slice(i, i + 2)
    if (map[subStr]) {
      num += map[subStr]
      i += 2
    } else {
      num += map[s[i]]
      i += 1
    }
  }
  return num
}
// @lc code=end
console.log(romanToInt('MCMXCIV'))
