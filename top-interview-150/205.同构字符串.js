/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = new Map()
  const mapT = new Map()
  for (let i = 0; i < s.length; i++) {
    const chS = s[i]
    const chT = t[i]

    if (mapS.has(chS) && mapS.get(chS) !== chT) return false
    if (mapT.has(chT) && mapT.get(chT) !== chS) return false

    mapS.set(chS, chT)
    mapT.set(chT, chS)
  }
  return true
}
// @lc code=end

// true
// const s = 'egg'
// const t = 'add'

// false
const s = 'badc'
const t = 'baba'
console.log(isIsomorphic(s, t))
