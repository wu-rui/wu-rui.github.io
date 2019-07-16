/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 *
 * https://leetcode.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (37.59%)
 * Likes:    376
 * Dislikes: 433
 * Total Accepted:    153K
 * Total Submissions: 406.1K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list using insertion sort.
 * 
 * 
 * 
 * 
 * 
 * A graphical example of insertion sort. The partial sorted list (black)
 * initially contains only the first element in the list.
 * With each iteration one element (red) is removed from the input data and
 * inserted in-place into the sorted list
 * 
 * 
 * 
 * 
 * 
 * Algorithm of Insertion Sort:
 * 
 * 
 * Insertion sort iterates, consuming one input element each repetition, and
 * growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it
 * there.
 * It repeats until no input elements remain.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
 * 1.从第一个开始判断，后面的节点是否大于自己
 * 2,大于自己的话，取出节点，放在第一个节点后面，循环找到第一个大于自己的节点，插入
 * 3.找下一个节点
 */
var insertionSortList = function (head) {
  if (!head) return null;
  let node = {
    val: null,
    next: head,
  }
  while (head && head.next !== null) {
    // 当当前节点大于后面的节点的时候，需要进行处理
    if (head.val > head.next.val) {
      // 取出下一个节点
      let cur = head.next;
      head.next = cur.next;
      cur.next = null;
      // 取出节点放在从头开始比较节点的大小
      let nodeNext = node;
      let isAdd = false;
      while (nodeNext && nodeNext.next !== null) {
        // 当找到一个节点的下一个节点大于当前取出的节点的时候，插入
        if (nodeNext.next.val > cur.val) {
          cur.next = nodeNext.next;
          nodeNext.next = cur;
          isAdd = true;
          break;
        }
        nodeNext = nodeNext.next;
      }
      // 如果没有进循环，表示没有比自己更大的节点，因此直接插入在最后面
      if (!isAdd) {
        nodeNext.next = cur;
      }
    }
    // 这里需要判断是否交换到最后一个节点，若是最后一个是没有下一个的值的
    if (head.next && head.next.val >= head.val) {
      head = head.next;
    }
  }
  return node.next;
};

