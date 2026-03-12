/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let res = undefined
  const inorder = (root) => {
    if (root === null) return
    inorder(root.left)
    k--
    if (k === 0) res = root.val
    inorder(root.right)
  }
  inorder(root)
  return res
};
// @lc code=end
const root = new TreeNode(3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4))
console.log(kthSmallest(root, 3))
