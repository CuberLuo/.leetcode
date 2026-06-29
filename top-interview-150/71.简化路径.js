/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  const pList = path.split('/')
  for (const p of pList) {
    if (p === '' || p === '.') continue
    if (p === '..') {
      if (stack.length > 0) stack.pop()
    } else {
      stack.push(p)
    }
  }
  return '/' + stack.join('/')
}
// @lc code=end
// const sPath = simplifyPath('/home/user/Documents/../Pictures')
// const sPath = simplifyPath('/home/')
// const sPath = simplifyPath('/home//foo/')
const sPath = simplifyPath('/../')
console.log(sPath)
