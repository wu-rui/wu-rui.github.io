/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (27.69%)
 * Likes:    721
 * Dislikes: 881
 * Total Accepted:    214.4K
 * Total Submissions: 765.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 思路二，可以反过来想，12345null，变成45123null，其实5都是指向1的，重点是断开第几个节点
// 所以这里找到第几个节点就ok，双指针，走到尾巴，第二个指针开始动
// 计数为count，断开倒数第k个，即找到第count-k个节点指向空，返回下一个节点的链表即可
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 空链表或者不需要翻转的时候直接返回
  if (k == 0 || head == null) return head
  let count = 1;//等于1是因为直接从第一个元素开始遍历的
  let a = head;
  let b = head;
  // 需要两个节点，一个保留原节点，一个表示需要断开的节点
  while (head && head.next !== null) {
    count++
    head.next !== null ? head = head.next : ''
  }
  // 当元素遍历到最后一个元素结束，并计数
  k = k % count;
  // 也有可能k的值过大。这里取模，防止k大于链表长度
  if (k == 0) return a;
  // 如果k与链表长度呈倍数关系就直接返回
  for (let i = 0; i < count - k - 1; i++) {
    b = b.next;
  }
  // 从第一个元素开始找，找到底count-k 个元素
  let newHead = b.next
  // 新的节点，指向需要断开的节点的下一个节点，表示返回的链表的新的头
  b.next = null;
  // 断开这个节点
  head.next = a;
  // 收尾相连，返回
  return newHead;
};

