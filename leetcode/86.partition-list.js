/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (37.58%)
 * Likes:    708
 * Dislikes: 189
 * Total Accepted:    168.6K
 * Total Submissions: 447.8K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 * 需要遍历一遍这个节点，还需要一个min节点按顺序接上所有大于x 的节点
 * 而需要删除大于x的节点，再把两个节点串联起来

var partition = function (head, x) {
  if (!head) return null;
  if (head.next == null) return head;
  // node表示最后剩余的小的节点头
  let node = head;
  // min表示最后大于x的节点头
  let max = null;
  let cur = null;
  while (head) {
    // 如果当前节点大于等于x
    if (head.val >= x) {
      // 把这个节点放进max节点里面
      if (max == null) {
        max = cur = head;
      } else {
        // 如果节点已经存在，放在后序节点里面
        cur.next = head;
        cur = cur.next;
      }
      // 断开节点的时候需要判断是否是最后一个节点
      // 如果当前节点是最后一个节点并且大于x,这个节点直接等于max的第一个
      // 把max的第二个链接到当然节点
      if (head.next == null) {
        head.val = max;
        head.next = max.next;
        return node;
      }
      // 再把这个节点断开，从当前节点中删除
      head.val = head.next.val;
      // 这里需要判断是否是最后几个节点
      head.next = head.next.next;
    }
    // 只有当前节点小于x了，指针才会继续往下走
    if (head.val < x) {
      if (head.next == null) {
        head.next = max;
        return node;
      }
      head = head.next;
    }
  }
}; 

var partition = function (head, x) {
  const dummyHead1 = { next: null }
  const dummyHead2 = { next: null }
  let current = { next: head };
  let currentL1 = dummyHead1;
  let currentL2 = dummyHead2;
  while (current.next) {
    current = current.next;
    if (current.val < x) {
      currentL1.next = current;
      currentL1 = current;
    } else {
      currentL2.next = current;
      currentL2 = current;
    }
  }
  currentL2.next = null;
  currentL1.next = dummyHead2.next;
  return dummyHead1.next;
};
*/
var partition = function (head, x) {
  const headmin = {
    next: head
  }
  const headmax = {
    next: head
  }
  let headcur = {
    next: head
  }
  let mincur = headmin;
  let maxcur = headmax;
  while (headcur.next) {
    headcur = headcur.next;
    if (headcur.val < x) {
      mincur.next = headcur;
      mincur = mincur.next;
    } else {
      maxcur.next = headcur;
      maxcur = maxcur.next;
    }
  }
  maxcur.next = null;
  mincur.next = headmax.next;
  return headmin.next;
}

