/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isMirror = (nodeA, nodeB) => {
    // 两个都空
    if (nodeA === null && nodeB === null) return true
    // 一个空一个不空
    else if (nodeA === null || nodeB === null) return false
    // 两个值相等
    else if (nodeA.val !== nodeB.val) return false
    // 值相等则验证子节点
    return isMirror(nodeA.left, nodeB.right) && isMirror(nodeA.right, nodeB.left)
  }
  return isMirror(root.left, root.right)
};
// @lc code=end

