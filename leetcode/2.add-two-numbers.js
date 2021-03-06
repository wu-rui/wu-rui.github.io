/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.30%)
 * Likes:    5425
 * Dislikes: 1394
 * Total Accepted:    918K
 * Total Submissions: 2.9M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = {
    val: 0,
    next: null,
  }
  let cur = l3;
  let isTen = 0;
  while (l1 || l2) {
    let lw = {
      val: (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + isTen,
      next: null,
    }
    if (lw.val > 9) {
      lw.val = lw.val - 10;
      isTen = 1;
    } else {
      isTen = 0;
    }
    l1 != null ? l1 = l1.next : '';
    l2 != null ? l2 = l2.next : '';
    cur.next = lw;
    cur = cur.next;
  }
  if (isTen === 1) {
    cur.next = { val: 1, next: null };
    cur = cur.next;
  }
  return l3.next;
};

