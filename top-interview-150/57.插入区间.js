/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const curInterval = intervals[i]
    const lastInterval = res[res.length - 1]
    if (curInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], curInterval[1])
    } else {
      res.push(curInterval)
    }
  }
  return res
};
// @lc code=end

const intervals = [[1, 3], [6, 9]]
const newInterval = [2, 5]
insert(intervals, newInterval)