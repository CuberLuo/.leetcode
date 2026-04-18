Array.prototype.myReduce = function (callback, initValue) {
  let startIndex = initValue ? 0 : 1
  let acc = initValue || this[0] //累积数值初始化
  for (let i = startIndex; i < this.length; i++) {
    let cur = this[i]
    acc = callback(acc, cur, i, this)
  }
  return acc
}

// 此处未传index和array
const result = [1, 2, 3].myReduce((sum, item) => sum + item, 100)
console.log(result)
