/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (37.51%)
 * Likes:    1868
 * Dislikes: 196
 * Total Accepted:    313.3K
 * Total Submissions: 835.3K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * 
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 * 
 * 
 * 
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []
  this.minIndex = -1;
  this.stackIndex = -1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.stackIndex++;
  // 如果最小栈没有数据，直接插入
  if (this.minStack.length < 1) {
    this.minStack.push(x)
    this.minIndex++;
  } else {
    // 如果有，先对比，比最小栈最后一个还要小，再push,否则跳过
    if (this.minStack[this.minIndex] >= x) {
      this.minStack.push(x)
      this.minIndex++;
    }
  }
  return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let a = null;
  if (this.stack.length < 1) {
    return a = undefined;
  } else {
    a = this.stack.pop();
    this.stackIndex--;
    if (a == this.minStack[this.minIndex]) {
      this.minStack.pop();
      this.minIndex--;
    }
    return a;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length > 0 ? this.stack[this.stackIndex] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.length > 0 ? this.minStack[this.minIndex] : undefined;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

