/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let pA = head//慢指针
  let pB = head//快指针
  let flag = false
  // 慢指针走过的路不为空则说明快指针能走
  // 快指针不需要单独判断是否为空
  while (pB !== null && pB.next !== null) {
    pA = pA.next
    pB = pB.next.next
    if (pA === pB) {
      flag = true
      break
    }
  }
  return flag
};
// @lc code=end

