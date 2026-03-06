/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0
  // 最大深度是从根节点出发到最远叶子节点的节点数
  const maxDepth = function (root) {
    if (root === null) return 0
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    // 当前节点直径=左子树深度+右子树深度
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)
    return 1 + Math.max(leftDepth, rightDepth)
  };
  maxDepth(root)
  return maxDiameter
};
// @lc code=end

