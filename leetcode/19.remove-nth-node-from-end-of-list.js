/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (34.36%)
 * Likes:    1924
 * Dislikes: 141
 * Total Accepted:    411K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 * 这道题的进阶解法是一次遍历，即为双指针，
 * 让两个指针相隔n个距离，并让后面的指针指到最后一个
 * 那么前面的指针就是倒数第几个
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  const res = head;
  let cen = {
    val: null,
    next: head,
  };
  let end = 1;
  while (head) {
    if (end > n) {
      cen = cen.next;
    }
    head = head.next;
    end++;
  }
  // 这是n为链表长度的时候，删除第一个节点
  if (cen.val == null) return res.next;
  // 这是n为1，删除最后一个节点的时候
  if (n == 1) {
    cen.next = null;
    return res;
  }
  cen.next = cen.next.next;
  return res;
};

