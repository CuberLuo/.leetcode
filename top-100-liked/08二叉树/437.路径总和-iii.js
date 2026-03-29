/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) return 0
  let total = cntPath(root, targetSum)
  total += pathSum(root.left, targetSum)
  total += pathSum(root.right, targetSum)
  return total
};
// 记录从root出发节点和等于targetSum的路径数
const cntPath = (root, targetSum) => {
  if (root === null) return 0
  let cnt = 0
  // 每一个节点都要判断
  if (root.val === targetSum) cnt++

  cnt += cntPath(root.left, targetSum - root.val)
  cnt += cntPath(root.right, targetSum - root.val)
  return cnt
}
// @lc code=end

