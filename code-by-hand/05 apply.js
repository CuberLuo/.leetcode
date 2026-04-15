Function.prototype.myApply = function (ctx, args) {
  const fn = Symbol()
  ctx[fn] = this
  const res = ctx[fn](...(args || []))
  delete ctx[fn]
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
