/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return []
  const result = []
  const queue = [root]
  // 广度优先遍历BFS
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
  return result
};
// @lc code=end

