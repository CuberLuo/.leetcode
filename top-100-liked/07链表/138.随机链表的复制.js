/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (head === null) return null
  const map = new Map()
  let cur = head
  // 先遍历一遍把所有节点val存入哈希表
  while (cur !== null) {
    map.set(cur, new _Node(cur.val))
    cur = cur.next
  }
  cur = head
  // 再遍历一遍更新next和random
  while (cur !== null) {
    map.get(cur).next = map.get(cur.next) || null
    map.get(cur).random = map.get(cur.random) || null
    cur = cur.next
  }
  return map.get(head)
};
// @lc code=end

