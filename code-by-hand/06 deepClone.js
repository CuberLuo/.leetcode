// 带层级控制 + 循环引用的深拷贝
function deepClone(obj = {}, maxDepth = Infinity, map = new WeakMap()) {
  // 基本类型直接返回
  if (typeof obj !== 'object' || obj == null) return obj
  // 处理循环引用
  if (map.has(obj)) return map.get(obj)
  // 层级用完了，直接返回原对象
  if (maxDepth <= 0) return obj

  const result = Array.isArray(obj) ? [] : {}

  map.set(obj, result)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], maxDepth - 1, map)
    }
  }

  return result
}

// Scenario1 普通多级对象
const a = {
  b: {
    name: 'ljt',
  },
  c: 1,
}

const newA = Object.assign({}, a) //浅拷贝
// const newA = deepClone(a) //深拷贝
newA.b.name = 'ikun'

console.log(a)
console.log(newA)

// Scenario2 循环引用
const obj = {
  name: 'ljt',
  child: null,
}
obj.child = obj

const newObj = deepClone(obj)
console.log(newObj)

// Scenario3 多层级
const mObj = {
  a: {
    b: {
      c: {
        d: {
          name: 'ljt',
        },
      },
    },
  },
}

const newMObj = deepClone(mObj, 2) //只有前两层深拷贝
newMObj.a.b.c.d.name = 'xxx'
console.log(JSON.stringify(mObj))
console.log(JSON.stringify(newMObj))
