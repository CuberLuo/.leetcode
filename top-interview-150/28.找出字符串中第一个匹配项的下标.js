/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 法一：indexOf
  // return haystack.indexOf(needle)

  // 法二：暴力法
  let len1 = haystack.length
  let len2 = needle.length
  let i = 0
  let j = 0
  while (i < len1 && j < len2) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1 //i回退到原来的位置+1
      j = 0
    }
  }
  if (j === len2) return i - j
  else return -1

  // 法三：BM算法（从后往前比较，坏字符+好后缀匹配，大步右移）
  // 此处简化处理只考虑坏字符匹配
  // let len1 = haystack.length
  // let len2 = needle.length

  // const map = new Map()
  // // map存放字符最后出现的下标
  // for (let i = 0; i < len2; i++) map.set(needle[i], i)

  // let i = 0
  // while (i <= len1 - len2) {
  //   let j = len2 - 1
  //   // 从后往前匹配
  //   while (j >= 0 && haystack[i + j] === needle[j]) j--
  //   if (j < 0) return i // 匹配成功

  //   // 坏字符计算右移步数
  //   const bad = haystack[i + j]
  //   let step = map.has(bad) ? j - map.get(bad) : j + 1
  //   if (step <= 0) step = 1
  //   i += step
  // }
  // return -1

  // 法四：KMP算法
  // let len1 = haystack.length
  // let len2 = needle.length

  // // 求next数组
  // let next = new Array(len2).fill(0)
  // for (let i = 1, j = 0; i < len2; i++) {
  //   while (j > 0 && needle[i] !== needle[j]) j = next[j - 1]
  //   if (needle[i] === needle[j]) j++
  //   next[i] = j
  // }

  // // KMP匹配
  // for (let i = 0, j = 0; i < len1; i++) {
  //   while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1]
  //   if (haystack[i] === needle[j]) j++
  //   if (j === len2) return i - len2 + 1
  // }

  // return -1
}
// @lc code=end

const haystack = 'sssai'
const needle = 'sai'
console.log(strStr(haystack, needle))
