/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }
  // 左子树找p或q
  const left = lowestCommonAncestor(root.left, p, q)
  // 右子树找p或q
  const right = lowestCommonAncestor(root.right, p, q)

  if (left !== null && right !== null) {
    return root
  } else if (left !== null) {
    return left
  } else if (right !== null) {
    return right
  } else {
    return null
  }
};
// @lc code=end

