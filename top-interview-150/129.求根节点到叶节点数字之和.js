/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0
  const path = []
  const backtrack = (node) => {
    if (node === null) return
    path.push(node.val)
    if (node.left === null && node.right === null) {
      let curSum = path.reduce((pre, cur) => pre * 10 + cur)
      sum += curSum
    }
    backtrack(node.left)
    backtrack(node.right)
    path.pop()
  }
  backtrack(root)
  return sum
};
// @lc code=end

const root = new TreeNode(4,
  new TreeNode(9,
    new TreeNode(5),
    new TreeNode(1)
  ),
  new TreeNode(0)
)
sumNumbers(root)