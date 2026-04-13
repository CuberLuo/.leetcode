Function.prototype.myCall = function (ctx, ...args) {
  const fn = Symbol()
  ctx[fn] = this
  const res = ctx[fn](...args)
  delete ctx[fn]
  return res
}
