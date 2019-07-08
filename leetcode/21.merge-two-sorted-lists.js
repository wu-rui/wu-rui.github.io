/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (47.75%)
 * Likes:    2354
 * Dislikes: 340
 * Total Accepted:    614.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
 * 这道题解法是，使用两个指针，一个指针指向每一个小的数，一个记录头指针返回
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let newList = {
    val: 0,
    next: l1,
  }
  let res = newList;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newList.next = l1;
      l1 = l1.next;
    } else {
      newList.next = l2;
      l2 = l2.next;
    }
    newList = newList.next;
  }
  // 最后肯定只有一个链表有数据一个没有数据，
  // 让这个临时指针指向剩余数据的指针即可
  if (!l1 || !l2) {
    newList.next = l1 || l2;
  }
  return res.next;

};

