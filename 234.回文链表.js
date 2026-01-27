/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true
  const arr = []
  let p = head
  while (p !== null) {
    arr.push(p.val)
    p = p.next
  }
  let i = 0
  let j = arr.length - 1
  while (i <= j) {
    if (arr[i] !== arr[j]) {
      return false
    }
    i++
    j--
  }
  return true
};
// @lc code=end
// TODO:反转后半段链表进行优化
