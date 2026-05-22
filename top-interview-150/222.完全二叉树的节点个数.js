/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  let cnt = 0
  const getNodesRes = (root) => {
    if (root === null) return
    else {
      cnt++
      getNodesRes(root.left)
      getNodesRes(root.right)
    }
  }
  getNodesRes(root)
  return cnt
}
// @lc code=end
