/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.arr = new Array()
  this.valMap = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valMap.has(val)) return false
  this.arr.push(val)
  this.valMap.set(val, this.arr.length - 1)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valMap.has(val)) return false
  const itemIndex = this.valMap.get(val)
  // 先将数组中该元素与末尾元素交换再pop()
  const arrLen = this.arr.length
  const lastVal = this.arr[arrLen - 1]
    ;[this.arr[itemIndex], this.arr[arrLen - 1]] = [this.arr[arrLen - 1], this.arr[itemIndex]]
  this.arr.pop()
  this.valMap.set(lastVal, itemIndex)
  this.valMap.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length)//[0,len-1]
  return this.arr[randomIndex]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

