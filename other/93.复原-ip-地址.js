/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []
  const path = []
  const backtrack = (startIndex) => {
    if (path.length === 4) {
      if (startIndex === s.length) result.push(path.join('.'))
      return
    }
    for (let i = startIndex; i < Math.min(startIndex + 3, s.length); i++) {
      const tmp = s.slice(startIndex, i + 1)
      if (tmp.length > 1 && tmp[0] === '0') break //tmp不能有前导0
      if (Number(tmp) > 255) break //tmp不能大于255

      path.push(tmp)
      backtrack(i + 1)
      path.pop()
    }
  }

  backtrack(0)
  return result
}
// @lc code=end

const s = '25525511135'
console.log(restoreIpAddresses(s))
// ["255.255.11.135","255.255.111.35"]
