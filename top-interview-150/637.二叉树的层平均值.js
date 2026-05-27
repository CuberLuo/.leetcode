/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const curSize = queue.length
    const curList = []
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      curList.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    result.push(curList)
  }
  return result.map((item) => {
    const sum = item.reduce((prev, cur) => prev + cur)
    return sum / item.length
  })
}
// @lc code=end

// const root = [3, 9, 20, null, null, 15, 7]
const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(averageOfLevels(root))
// console.log(root)
