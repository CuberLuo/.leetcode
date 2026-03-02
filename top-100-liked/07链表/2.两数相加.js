/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null
  let cur = null
  let carry = 0//进位
  while (l1 || l2 || carry !== 0) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const result = val1 + val2 + carry

    const nodeVal = result % 10
    carry = Math.floor(result / 10)
    if (head === null) {
      head = new ListNode(nodeVal)
      cur = head
    } else {
      cur.next = new ListNode(nodeVal)
      cur = cur.next
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head
};
// @lc code=end

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
