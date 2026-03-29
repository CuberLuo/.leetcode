/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = []
  const backtrack = (root, path, targetSum) => {
    if (root === null) return
    path.push(root.val)
    // 叶子节点
    if (root.left === null && root.right === null) {
      if (targetSum === root.val) result.push([...path])
    }
    backtrack(root.left, path, targetSum - root.val)
    backtrack(root.right, path, targetSum - root.val)
    path.pop()
  }
  backtrack(root, [], targetSum)
  return result
};
// @lc code=end

const root = new TreeNode(5,
  new TreeNode(4,
    new TreeNode(11,
      new TreeNode(7),
      new TreeNode(2)
    ),
    null
  ),
  new TreeNode(8,
    new TreeNode(13),
    new TreeNode(4,
      new TreeNode(5),
      new TreeNode(1)
    )
  )
)

console.log(pathSum(root, 22))