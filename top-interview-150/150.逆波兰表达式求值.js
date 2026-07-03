/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  const calcArray = ['+', '-', '*', '/']
  for (let i = 0; i < tokens.length; i++) {
    if (!calcArray.includes(tokens[i])) {
      stack.push(Number(tokens[i]))
    } else {
      const num2 = stack.pop()
      const num1 = stack.pop()
      switch (tokens[i]) {
        case '+':
          stack.push(num1 + num2)
          break;
        case '-':
          stack.push(num1 - num2)
          break;
        case '*':
          stack.push(num1 * num2)
          break;
        case '/':
          const res = num1 / num2
          if (res < 0) stack.push(Math.ceil(res))
          else stack.push(Math.floor(res))
          break;
      }
    }
  }
  return stack[0]
};
// @lc code=end

// const tokens = ["2", "1", "+", "3", "*"]
// const tokens = ["4", "13", "5", "/", "+"]
const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(tokens))