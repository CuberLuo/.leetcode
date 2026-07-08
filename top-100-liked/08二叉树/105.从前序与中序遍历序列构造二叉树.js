/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  const rootIndex = inorder.indexOf(rootVal)

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  )
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  )
  return root
};
// @lc code=end


const levelOrder = (root) => {
  if (root === null) return []
  const result = []
  const queue = [root]

  while (queue.length > 0) {
    const curSize = queue.length
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      if (node) {
        result.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      } else {
        result.push(null)
      }
    }
  }

  // 截掉末尾连续null
  let lastValid = result.findLastIndex(v => v !== null)
  return result.slice(0, lastValid + 1)
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
const root = buildTree(preorder, inorder)
console.log(levelOrder(root))