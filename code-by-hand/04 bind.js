Function.prototype.myBind = function (ctx, ...args) {
  const fn = this
  return function () {
    fn.apply(ctx, [...args, ...Array.from(arguments)])
  }
}
