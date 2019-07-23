/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (34.93%)
 * Likes:    2661
 * Dislikes: 172
 * Total Accepted:    416.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 逻辑很简单，但是边缘情况超级多
 */


// let y = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: {
//         val: 6,
//         next: null,
//       },
//     }
//   }
// };
// let x = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 9,
//       next: null,
//     }
//   }
// };
// let z = {
//   val: 3,
//   next: {
//     val: 0,
//     next: {
//       val: 8,
//       next: null,
//     }
//   }
// };
// let list = [x, y, z]
var mergeKLists = function (lists) {
  let n = lists.length;
  if (n == 0) return null;
  if (n == 1) return lists[0]
  let i = 0;
  while (lists[i] == null || lists[i].val == null) {
    i++;
    if (i >= n) return null;
  }
  if (i >= n) return null;
  let node = {
    val: null,
    next: lists[i++]
  }
  if (i >= n) return node.next;
  for (i; i < lists.length; i++) {
    let cur = node.next;
    let list = lists[i]
    while (list) {
      let add = new ListNode(list.val)
      if (cur && add.val <= cur.val) {
        // 插入开头
        add.next = cur;
        node.next = add;
        list = list.next;
        cur = node.next;
      } else if (cur.next !== null && add.val > cur.val && add.val <= cur.next.val) {
        // 插入中间
        add.next = cur.next;
        cur.next = add;
        list = list.next;
      } else if (add.val > cur.val && cur.next == null) {
        // 插入末尾
        cur.next = add;
        list = list.next;
        cur = node.next;
      } else {
        cur = cur.next;
      }
    }
  }
  return node.next;
};

