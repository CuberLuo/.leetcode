/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  const arr = new Array(numRows).fill(0).map(() => new Array())
  let fillIndex = 0
  let increaseFlag = false
  for (let i = 0; i < s.length; i++) {
    arr[fillIndex].push(s[i])
    //拐角处的fillIndex是numRows-1的倍数
    if (fillIndex % (numRows - 1) == 0) {
      increaseFlag = !increaseFlag
    }
    if (increaseFlag) fillIndex++
    else fillIndex--

  }
  const res = arr.reduce((prev, cur) => {
    return prev + cur.join('')
  }, '')
  return res
};
// @lc code=end
const s = "PAYPALISHIRING"
const numRows = 3
convert(s, numRows)