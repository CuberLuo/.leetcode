function isEqual(obj1, obj2, map = new WeakMap()) {
  if (typeof obj1 !== 'object' || obj1 == null ||
    typeof obj2 !== 'object' || obj2 == null) {
    return Object.is(obj1,obj2)
  }
  if (obj1 === obj2) return true
  
  // 处理循环引用
  if (map.has(obj1)) return map.get(obj1) === obj2
  map.set(obj1, obj2)

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key], map)
    if (!res) return false
  }
  return true
}

