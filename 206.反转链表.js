/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null || head.next === null) return head

    let prev = null
    let cur = head
    while (cur) {
        // 暂存下一个节点
        const next = cur.next
        // 反转指向
        cur.next = prev
        // 移动节点
        prev = cur
        cur = next
    }
    return prev
};
// @lc code=end

