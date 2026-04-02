/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 存在括号嵌套需要用栈处理
  const stack = []
  let curStr = ''
  let curNum = 0
  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {//数字
      curNum = curNum * 10 + Number(ch)
    } else if (ch === '[') {
      stack.push([curStr, curNum])
      curStr = ''
      curNum = 0
    } else if (ch === ']') {
      const [preStr, preNum] = stack.pop()
      curStr = preStr + curStr.repeat(preNum)
    } else {//字母
      curStr += ch
    }
  }
  return curStr
};
// @lc code=end

// const s = "3[a]2[bc]"
const s = "3[a2[c]]"
decodeString(s)