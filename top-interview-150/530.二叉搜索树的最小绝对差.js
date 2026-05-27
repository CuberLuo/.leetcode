/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  const result = []
  // 二叉搜索树的中序遍历一定是升序的
  const inorder = (root) => {
    if (root === null) return
    inorder(root.left)
    result.push(root.val)
    inorder(root.right)
  }
  inorder(root)

  let minDelta = Infinity
  for (let i = 0; i < result.length - 1; i++) {
    const delta = Math.abs(result[i] - result[i + 1])
    minDelta = Math.min(minDelta, delta)
  }
  return minDelta
}
// @lc code=end

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
getMinimumDifference(root)
