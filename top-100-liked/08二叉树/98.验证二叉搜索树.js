/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  const validCheck = (node, lower, upper) => {
    if (node === null) return true
    // 当前节点超过上下界则非法
    if (node.val <= lower || node.val >= upper) return false
    return validCheck(node.left, lower, node.val) &&
      validCheck(node.right, node.val, upper)
  }
  return validCheck(root, -Infinity, Infinity)
};
// @lc code=end

