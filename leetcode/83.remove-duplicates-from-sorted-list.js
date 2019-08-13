/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (43.12%)
 * Likes:    860
 * Dislikes: 85
 * Total Accepted:    351.2K
 * Total Submissions: 813.9K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
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
var deleteDuplicates = function (head) {
  let data = {}
  let res = new ListNode(null)
  let cur = res;
  while (head) {
    if (data[head.val] == undefined) {
      data[head.val] = head.val
      let curr = new ListNode(head.val)
      cur.next = curr;
      cur = cur.next;
    }
    head = head.next;
  }
  return res.next;
};

