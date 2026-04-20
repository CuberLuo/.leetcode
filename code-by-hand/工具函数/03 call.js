Function.prototype.myCall = function (ctx, ...args) {
  const key = Symbol()
  ctx[key] = this
  const res = ctx[key](...args)
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

sayHi.myCall(obj, 1, 2, 3) //obj临时调用sayHi
//obj相当于ctx，sayHi相当于this
