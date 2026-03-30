/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.root = {
    children: {},
    isEnd: false
  }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root
  for (const ch of word) {
    if (!node.children[ch]) {
      node.children[ch] = {
        children: {},
        isEnd: false
      }
    }
    node = node.children[ch]
  }
  node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root
  for (const ch of word) {
    if (!node.children[ch]) return false
    node = node.children[ch]
  }
  // 单词word遍历完后要检查当前节点是不是某个单词的结尾
  return node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root
  for (const ch of prefix) {
    if (!node.children[ch]) return false
    node = node.children[ch]
  }
  // 前缀prefix遍历完说明该前缀存在
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

