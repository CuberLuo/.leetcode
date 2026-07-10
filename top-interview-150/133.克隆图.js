/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const map = new Map()//利用哈希表缓存解决循环引用
  const dfs = (node) => {
    if (node === null) return null
    if (map.has(node)) return map.get(node)
    const cloneNode = new _Node(node.val)
    map.set(node, cloneNode)
    for (const neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor))
    }
    return cloneNode
  }
  return dfs(node)
};
// @lc code=end

