/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 两个链表分别构建小于x的节点和大于等于x的节点
  const dummy1 = new ListNode()
  const dummy2 = new ListNode()
  let p1 = dummy1
  let p2 = dummy2
  let cur = head
  while (cur !== null) {
    //cur最终停在末尾元素的next位置（null）
    if (cur.val < x) {
      p1.next = new ListNode(cur.val)
      p1 = p1.next
    } else {
      p2.next = new ListNode(cur.val)
      p2 = p2.next
    }
    cur = cur.next
  }
  p1.next = dummy2.next
  return dummy1.next
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
const head = [1, 4, 3, 2, 5, 2]
const x = 3
partition(arrToList(head), x)