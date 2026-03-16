/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null

  const merge = (node1, node2) => {
    if (node1 === null) return node2
    if (node2 === null) return node1

    if (node1.val < node2.val) {
      node1.next = merge(node1.next, node2)
      return node1
    } else {
      node2.next = merge(node1, node2.next)
      return node2
    }
  }

  let result = lists[0]
  let k = 1
  while (k < lists.length) {
    result = merge(result, lists[k])
    k++
  }
  return result
};
// @lc code=end

const head1 = new ListNode(1,
  new ListNode(4, new ListNode(5))
)
const head2 = new ListNode(1,
  new ListNode(3, new ListNode(4))
)

const lists = [head1, head2]
mergeKLists(lists)
