/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null
  const rootVal = postorder[postorder.length - 1]
  const root = new TreeNode(rootVal)
  const rootIndex = inorder.findIndex(v => v === rootVal)

  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  )
  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex, postorder.length - 1)
  )
  return root
};
// @lc code=end
const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]
buildTree(inorder, postorder)