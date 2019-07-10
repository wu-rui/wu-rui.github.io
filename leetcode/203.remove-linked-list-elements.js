/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.97%)
 * Likes:    866
 * Dislikes: 52
 * Total Accepted:    233.1K
 * Total Submissions: 647.7K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let res = {
    next: head,
  }
  let cur = res;
  while (cur && cur.next) {
    let cen = cur.next;
    if (cen.val === val) {
      cur.next = cen.next;
      cen = cen.next;
    }
    if (!cen || cen.val !== val) {
      cur = cen;
    }
  }
  return res.next;
};

