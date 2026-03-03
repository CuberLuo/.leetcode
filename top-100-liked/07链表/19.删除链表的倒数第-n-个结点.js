/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)//哨兵节点
  let pA = dummy
  let pB = head
  // 指针B往前先走n步
  for (let i = 0; i < n; i++) {
    pB = pB.next
  }
  while (pB !== null) {
    pB = pB.next
    pA = pA.next
  }
  pA.next = pA.next.next
  return dummy.next
};
// @lc code=end

const head = new ListNode(1, null)
console.log(removeNthFromEnd(head, 1))

