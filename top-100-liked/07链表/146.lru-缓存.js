/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache=new Map()
    this.capacity=capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)){
      return -1
    }
    // 有key先删除后添加
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.cache.has(key)){
      // 添加key之前检查容量是否达到上限
      if(this.cache.size >= this.capacity){
        const oldKey = this.cache.keys().next().value
        this.cache.delete(oldKey)
      }
    }else{
      this.cache.delete(key)
    }
    this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

