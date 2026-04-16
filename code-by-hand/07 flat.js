Array.prototype.myFlat = function (maxDepth = 1) {
  if (maxDepth <= 0) return this
  const result = []
  this.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item.myFlat(maxDepth - 1))
    } else {
      result.push(item)
    }
  })
  return result
}

const arr = [1, [2], [3, [4, 5]]]
console.log(arr.myFlat(2))
