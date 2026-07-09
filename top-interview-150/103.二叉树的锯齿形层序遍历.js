/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  const queue = [root]
  const result = []
  let flag = true
  while (queue.length > 0) {
    const curSize = queue.length
    const curRes = []
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      if (flag) curRes.push(node.val)
      else curRes.unshift(node.val)

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    result.push(curRes)
    flag = !flag
  }
  return result
};
// @lc code=end
const root = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
)
zigzagLevelOrder(root)
