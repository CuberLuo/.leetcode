/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null
  let pA = head//慢指针
  let pB = head//快指针
  let flag = false
  while (pB !== null && pB.next !== null) {
    pA = pA.next
    pB = pB.next.next
    if (pA === pB) {
      flag = true
      break
    }
  }
  if (flag) {
    //快指针重置到head节点
    pB = head
    while (pA !== pB) {
      pA = pA.next
      pB = pB.next
    }
    return pA
  } else {
    return null
  }
};
// @lc code=end

