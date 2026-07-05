/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const reverseList = (head) => {
    if (head === null || head.next === null) return head
    let pre = null
    let cur = head
    while (cur !== null) {
      const next = cur.next
      cur.next = pre//改变指向
      // pre和cur重新赋值
      pre = cur
      cur = next
    }
    return pre
  }
  let dummy = new ListNode()
  let pre = dummy
  pre.next = head
  let segStart = head
  for (let i = 0; i < left - 1; i++) {
    segStart = segStart.next
    pre = pre.next
  }
  let segEnd = segStart
  for (let i = 0; i < right - left; i++) {
    segEnd = segEnd.next
  }
  const nextHead = segEnd.next
  segEnd.next = null//反转前要断开
  reverseList(segStart)
  pre.next = segEnd
  segStart.next = nextHead
  return dummy.next
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
const left = 2
const right = 4
const reverseHead = reverseBetween(head, left, right)
console.log(listToArr(reverseHead))