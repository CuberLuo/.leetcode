// 函数柯里化
function currying(fn) {
  return function curried(...args) {
    // fn.length代表函数fn形参个数
    if (args.length >= fn.length) {
      //参数个数够了
      return fn(...args)
    }
    // 参数不够继续收集参数
    return (...newArgs) => curried(...args, ...newArgs)
  }
}

// test
function add(a, b) {
  return a + b
}
// console.log(currying(add)(1)(2))
console.log(currying(add)(1, 2))

// 函数反柯里化
function uncurrying(fn) {
  return function (ctx, ...args) {
    return fn.apply(ctx, args)
  }
}
// test
const likeArray = { 0: 'a', 1: 'b', length: 2 }
uncurrying(Array.prototype.push)(likeArray, 'c')
console.log(likeArray)
