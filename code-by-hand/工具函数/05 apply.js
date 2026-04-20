Function.prototype.myApply = function (ctx, args) {
  const key = Symbol()
  ctx[key] = this
  const res = ctx[key](...(args || []))
  delete ctx[key]
  return res
}

const obj = {
  name: 'ljt',
}
function sayHi() {
  console.log('hi', this.name)
  console.log(Array.from(arguments))
}

sayHi.myApply(obj, [1, 2, 3])
// 通过数组传参，只需要传args即可。
// call和bind参数个数不确定，要使用剩余参数...args
// 传入后的args相当于数组，可以使用展开运算符...args
