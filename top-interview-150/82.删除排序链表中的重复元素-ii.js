/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  if (head.val === head.next.val) {
    let p = head.next;
    while (p && p.val === head.val) {
      p = p.next;
    }
    return deleteDuplicates(p);
  } else {
    head.next = deleteDuplicates(head.next);
    return head;
  }
};
// @lc code=end
const listToArr = (head) => {
  const res = []
  let p = head
  while (p !== null) {
    res.push(head.val)
    p = p.next
  }
  return res
}

const arrToList = (arr) => {
  const dummy = new ListNode()
  let p = dummy
  for (let i = 0; i < arr.length; i++) {
    p.next = new ListNode(arr[i])
    p = p.next
  }
  return dummy.next
}

const head = [1, 2, 3, 3, 4, 4, 5]
deleteDuplicates(arrToList(head))
