/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (root === null) return root
  // 层序遍历
  const queue = [root]
  while (queue.length > 0) {
    const curSize = queue.length
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      // 不是最后一个元素则next为队首元素
      if (i !== curSize - 1) node.next = queue[0]
      else node.next = null

      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
  }
  return root
};
// @lc code=end

