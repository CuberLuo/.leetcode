/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const curInterval = intervals[i]
    const lastInterval = result[result.length - 1]
    // 有重叠
    if (curInterval[0] <= lastInterval[1]) {
      if (curInterval[1] > lastInterval[1])
        lastInterval[1] = curInterval[1]
    } else {
      result.push(curInterval)
    }
  }
  return result
};
// @lc code=end

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
const intervals = [[1, 4], [2, 3]]
console.log(merge(intervals))