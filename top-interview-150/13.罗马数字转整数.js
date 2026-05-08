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
  }
  for (let i = 0; i < s.length; i++) {
    if (i !== s.length - 1 && map[s[i]] < map[s[i + 1]]) {
      num -= map[s[i]]
    } else {
      num += map[s[i]]
    }
  }
  return num
}
// @lc code=end
console.log(romanToInt('MCMXCIV'))
