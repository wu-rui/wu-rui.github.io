/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 *
 * https://leetcode.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (50.38%)
 * Likes:    771
 * Dislikes: 101
 * Total Accepted:    95.8K
 * Total Submissions: 189.7K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The most significant digit comes first and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the
 * lists is not allowed.
 * 
 * 
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
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
  let ary1 = []
  let ary2 = []
  while (l1) {
    ary1.push(l1.val)
    l1 = l1.next;
  }
  while (l2) {
    ary2.push(l2.val)
    l2 = l2.next;
  }
  let isZero = 0;
  let node = {
    next: null,
  }
  let i = ary1.length - ary2.length;
  let j = (i < 0 ? ary2.length : ary1.length) - 1;
  for (j; j > -1; j--) {
    let cur = isZero;
    if ((!ary1.length || !ary2.length) && i !== 0) {
      cur += ary1.length == 0 ? ary2.pop() : ary1.pop();
    } else {
      cur += ary1.pop() + ary2.pop();
    }
    if (cur > 9) {
      cur = cur % 10;
      isZero = 1;
    } else {
      isZero = 0;
    }
    let nodecur = new ListNode(cur);
    nodecur.next = node.next;
    node.next = nodecur;
  }
  if (isZero) {
    let nodecur = new ListNode(isZero);
    nodecur.next = node.next;
    node.next = nodecur;
    isZero = 0;
  }
  return node.next;
};

