/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return
  const nodeList = []
  // 前序遍历
  const preorder = (root) => {
    if (root === null) return
    nodeList.push(root)
    preorder(root.left)
    preorder(root.right)
  }
  preorder(root)

  let p = 0
  while (p < nodeList.length) {
    nodeList[p].left = null
    if (p !== nodeList.length - 1) {
      nodeList[p].right = nodeList[p + 1]
    } else {
      nodeList[p].right = null
    }
    p++
  }
};
// @lc code=end
const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(3),
    new TreeNode(4)
  ),
  new TreeNode(5,
    null, new TreeNode(6)
  )
)
flatten(root)
