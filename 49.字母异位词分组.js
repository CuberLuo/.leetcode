/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('')
    // console.log(sortedStr)
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [])
    }
    map.get(sortedStr).push(str)
  }
  return Array.from(map.values())
};
// @lc code=end

// const tmp = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// console.log(tmp)