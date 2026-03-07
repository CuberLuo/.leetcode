/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head

  const mergeList = (l1, l2) => {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val < l2.val) {
      l1.next = mergeList(l1.next, l2)
      return l1
    } else {
      l2.next = mergeList(l1, l2.next)
      return l2
    }
  }
  let dummy = new ListNode(0, head)
  let pA = dummy//慢指针，一次走一步
  let pB = dummy//快指针，一次走两步
  while (pB !== null && pB.next !== null) {
    pA = pA.next
    pB = pB.next.next
  }
  const mid = pA
  const midNext = mid.next
  mid.next = null//链表一分为二
  const left = sortList(head)
  const right = sortList(midNext)
  // left和right都是有序的
  return mergeList(left, right)
};
// @lc code=end

// const head = new ListNode(4)
// head.next = new ListNode(2)
// head.next.next = new ListNode(1)
// head.next.next.next = new ListNode(3)
// console.log(head)