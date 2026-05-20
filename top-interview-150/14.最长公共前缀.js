/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 以第一个单词为基准，前缀从长到短遍历
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1) //缩短前缀
      if (prefix === '') return ''
    }
  }
  return prefix
}
// @lc code=end

const strs = ['flower', 'flow', 'flight']
// const strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))
