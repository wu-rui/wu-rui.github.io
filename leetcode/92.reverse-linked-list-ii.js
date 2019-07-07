/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (35.24%)
 * Likes:    1271
 * Dislikes: 93
 * Total Accepted:    200.5K
 * Total Submissions: 568.4K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let res = head;
  let count = 0;
  let first = {};
  let end = {};
  while (head) {
    count++;
    if (count == 1 && m == 1) {
      // 当从链表头开始反转的时候
      first.next = head;
    }
    if (m - count == 1) {
      first = head;
    }
    if (count == m) {
      end = head;
    }
    if (n == count) {
      if (head.next !== null) {

        end.next = head.next;
      } else {
        end.next = null;
      }
    }
    if (count > m && count <= n) {
      let s = {
        val: head.val,
        next: null,
      }
      s.next = first.next;
      first.next = s;
    }
    head = head.next;
  }
  return m === 1 ? first.next : res;
};

