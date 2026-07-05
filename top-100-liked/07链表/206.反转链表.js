/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head
  let prev = null
  let cur = head
  while (cur !== null) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
// @lc code=end

function createList(arr) {
  if (arr.length === 0) return null
  let dummy = new ListNode()
  let p = dummy
  for (const val of arr) {
    p.next = new ListNode(val)
    p = p.next
  }
  return dummy.next
}

function listToArr(head) {
  const res = []
  let p = head
  while (p !== null) {
    res.push(p.val)
    p = p.next
  }
  return res
}

const head = createList([1, 2, 3, 4, 5])
const reverseHead = reverseList(head)
console.log(listToArr(reverseHead))