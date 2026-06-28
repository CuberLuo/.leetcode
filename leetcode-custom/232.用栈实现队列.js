/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
  this.inStack = []
  this.outStack = []
}
// 将入栈的元素全部转移到出栈
MyQueue.prototype._transfer = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length !== 0) {
      const popItem = this.inStack.pop()
      this.outStack.push(popItem)
    }
  }
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this._transfer()
  return this.outStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this._transfer()
  return this.outStack[this.outStack.length - 1]
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
