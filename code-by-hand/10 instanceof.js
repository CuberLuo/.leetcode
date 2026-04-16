function myInstanceof(left, right) {
  if (typeof left !== 'object' || left == null) return false

  while (left) {
    // 获取隐式原型更规范的写法是Object.getPrototypeOf(left)
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
  return false
}
