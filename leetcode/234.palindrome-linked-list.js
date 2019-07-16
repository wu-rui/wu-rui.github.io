/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (36.35%)
 * Likes:    1738
 * Dislikes: 255
 * Total Accepted:    273.1K
 * Total Submissions: 749.5K
 * Testcase Example:  '[1,2]'
 *
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2
 * Output: false
 * 
 * Example 2:
 * 
 * 
 * Input: 1->2->2->1
 * Output: true
 * 
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true;
  let ary = []
  while (head) {
    ary.push(head.val)
    head = head.next;
  }
  let long = ary.length
  for (let i = 0, j = long - 1; i < (long - 1) / 2; i++ , j--) {
    if (ary[i] !== ary[j]) return false;
  }
  return true;
};

