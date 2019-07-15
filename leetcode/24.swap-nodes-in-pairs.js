/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (45.17%)
 * Likes:    1212
 * Dislikes: 107
 * Total Accepted:    328.4K
 * Total Submissions: 725.6K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let res = head.next;
  let cur = {};
  let before = {
    next: null,
  };
  while (head.next) {
    if (head.next.next) {
      cur = head.next.next;
      before !== null ? before.next = head.next : '';
      head.next.next = head;
      head.next = cur;
      before = head;
    } else {
      before.next = head.next;
      head.next.next = head;
      head.next = null;
      break;
    }
    head.next.next == true ? head = head.next.next : head = head.next;
  }
  return res;
};

