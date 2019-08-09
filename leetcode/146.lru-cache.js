/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (26.56%)
 * Likes:    3319
 * Dislikes: 123
 * Total Accepted:    328.4K
 * Total Submissions: 1.2M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently
 * used item before inserting a new item.
 *
 * The cache is initialized with a positive capacity.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 *
 *
 * LRUCache cache = new LRUCache( 2 capacity );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 *
 *
 *
 *
 */
/**
 * 自己的想法是一个对象和数组实现(但是在求最小未使用的值的时候比较复杂，而且数组的不断增加很占用内存)
 * 找最久未使用的值的时候，需要遍历对象，将最小的值得到
 * 标准解法：双向链表和一个对象，链表应该有两个空节点，方便操作（fast，cur）还有一个存储key，val的对象
 * 情况分为：
 *  put和get操作
 * put操作又分为两种情况：
 *    满链表和未满链表：满的链表要先删除fast的第一个节点，再在cur节点下增加一个新的节点
 *    未满链表只要在cur节点下面增加一个节点即可
 * get操作：
 *    不用区分满未满链表，只要找到那个节点，并且删除后，添加到cur节点下面即可
 *
 * @param {number} capacity
 */
// var LRUCache = function (capacity) {
//   this.right = null;
//   // 最左边节点，最久的
//   this.left = {
//     val: 'left',
//     next: this.right,
//   }
//   // 最右边节点，最新的
//   this.right = {
//     val: 'right',
//     last: this.left,
//   }
//   this.left.next = this.right;
//   this.data = {}
//   this.count = 0;
//   this.size = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key, value = null) {
//   // 如果传入value值，则是需要修改该值，并且移到最前面，此操作是put的操作，因此不需要返回值
//   if (value == null) {
//     if (this.data[key]) {
//       this.changeNode(key)
//       return this.data[key].val;
//     } else {
//       return -1;
//     }
//   } else {
//     this.changeNode(key, value)
//   }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   // 还需要判断是否存在，是否覆盖该值
//   if (this.data[key]) {
//     this.get(key, value)
//   } else {
//     if (this.count == this.size) {
//       // 如果是满链表，需要从data对象中删除该映射关系
//       this.deleteOnLeft()
//       this.count--;
//     }
//     // 从最右边插入一个节点（每一个节点都有last和next两条线），
//     // last只能从right走，next只能从left走
//     this.addOnRight(key, value)
//     this.count++;
//   }
// };

// // 从right端直接添加一个节点，同时新建一个映射关系
// LRUCache.prototype.addOnRight = function (key, value) {
//   let now = {
//     val: key,
//     last: null,
//     next: null,
//   }
//   let cur = this.right.last;
//   this.right.last = now;
//   now.last = cur;
//   cur = now.last.next;
//   now.last.next = now;
//   now.next = cur;
//   // 同时需要在data对象中建立一个节点映射
//   this.data[key] = {
//     val: value,
//     next: now,
//   }
// }


// // 从left端直接删掉一个节点,同时删掉data映射关系
// LRUCache.prototype.deleteOnLeft = function () {
//   let deleted = this.left.next.val;
//   delete this.data[deleted]
//   // 同时从最左边删掉一个节点
//   cur = this.left.next.next;
//   this.left.next = cur;
//   cur.last = this.left;
// }

// // get的时候，需要将该节点添加到right端，并且在left端（不是left的下一个节点）那边删掉该节点
// // data的映射关系不用管，因为data的指针不需要动
// LRUCache.prototype.changeNode = function (key, value = null) {
//   // 先得到这个节点
//   let cur = this.data[key].next;
//   // 先删除再新增
//   // 她的上一个节点的下一个指针指向她的下一个
//   cur.last.next = cur.next;
//   // 她的下一个节点的上一个指针指向她的上一个
//   cur.next.last = cur.last;
//   // 新增到right端
//   cur.last = this.right.last;
//   cur.last.next = cur;
//   cur.next = this.right;
//   this.right.last = cur;
//   if (value !== null) {
//     // 当put的键值对在映射关系中的时候，需要重新更改映射关系的value值
//     this.data[key].val = value
//   }
// }
var LRUCache = function (capacity) {
  this.right = null;
  this.left = {
    val: 'left',
    next: this.right,
  }
  this.right = {
    val: 'right',
    last: this.left,
  }
  this.left.next = this.right;
  this.data = {}
  this.count = 0;
  this.size = capacity;
};
LRUCache.prototype.get = function (key, value = null) {
  if (value == null) {
    if (this.data[key]) {
      this.changeNode(key)
      return this.data[key].val;
    } else {
      return -1;
    }
  } else {
    this.changeNode(key, value)
  }
};
LRUCache.prototype.put = function (key, value) {
  if (this.data[key]) {
    this.get(key, value)
  } else {
    if (this.count == this.size) {
      this.deleteOnLeft()
      this.count--;
    }
    this.addOnRight(key, value)
    this.count++;
  }
};
LRUCache.prototype.addOnRight = function (key, value) {
  let now = {
    val: key,
    last: null,
    next: null,
  }
  let cur = this.right.last;
  this.right.last = now;
  now.last = cur;
  cur = now.last.next;
  now.last.next = now;
  now.next = cur;
  this.data[key] = {
    val: value,
    next: now,
  }
}
LRUCache.prototype.deleteOnLeft = function () {
  let deleted = this.left.next.val;
  delete this.data[deleted]
  cur = this.left.next.next;
  this.left.next = cur;
  cur.last = this.left;
}
LRUCache.prototype.changeNode = function (key, value = null) {
  let cur = this.data[key].next;
  cur.last.next = cur.next;
  cur.next.last = cur.last;
  cur.last = this.right.last;
  cur.last.next = cur;
  cur.next = this.right;
  this.right.last = cur;
  if (value !== null) {
    this.data[key].val = value
  }
}

