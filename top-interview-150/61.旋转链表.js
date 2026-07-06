/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || head.next === null || k === 0) return head
  let cur = head
  let len = 1
  while (cur.next !== null) {
    // cur最后会停在链表的末尾元素
    cur = cur.next
    len++
  }
  cur.next = head
  cur = head
  k = k % len//处理k>=len
  for (let i = 0; i < len - k - 1; i++) cur = cur.next
  const newHead = cur.next
  cur.next = null
  return newHead
};
// @lc code=end

const arrToList = (arr) => {
  const dummy = new ListNode()
  let p = dummy
  for (let i = 0; i < arr.length; i++) {
    p.next = new ListNode(arr[i])
    p = p.next
  }
  return dummy.next
}

const head = [1, 2, 3, 4, 5]
const k = 2
rotateRight(arrToList(head), k)