/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return []
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const curSize = queue.length
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      // 层序遍历每个队列的最后一个元素
      if (i === curSize - 1) result.push(node.val)
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
  }
  return result
};
// @lc code=end

const root = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
)
console.log(rightSideView(root))