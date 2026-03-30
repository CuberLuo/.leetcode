/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 初始化邻接表
  const adj = new Array(numCourses).fill(0).map(() => [])
  // 初始化入度数组
  const inDegree = new Array(numCourses).fill(0)

  for (const [cur, pre] of prerequisites) {
    adj[pre].push(cur)
    inDegree[cur]++
  }
  // 打印adj
  // for (const index in adj) {
  //   console.log(index, ":", adj[index])
  // }

  const queue = []
  // 队列存入没有先修的课程
  for (const index in inDegree) {
    // console.log(index, inDegree[index])
    if (inDegree[index] === 0) queue.push(index)
  }
  let cnt = 0
  // BFS遍历
  while (queue.length > 0) {
    let index = queue.shift()
    // console.log('已修', index)
    cnt++
    // 对index的后续课程列表进行遍历
    for (const next of adj[index]) {
      inDegree[next]--
      if (inDegree[next] === 0) {//next先修课程修完
        queue.push(next)
      }
    }
  }
  return cnt === numCourses
};
// @lc code=end

const numCourses = 7
const prerequisites = [
  [1, 0],
  [2, 1],
  [5, 0],
  [6, 5],
  [4, 3],
  [2, 4]
]
canFinish(numCourses, prerequisites)