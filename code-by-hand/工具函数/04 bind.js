Function.prototype.myBind = function (ctx, ...args) {
  const fn = this
  return function (...newArgs) {
    fn.apply(ctx, [...args, ...newArgs])
  }
}

function sayHi() {
  console.log('hi', this.name)
  console.log(Array.from(arguments))
}
const obj = {
  name: 'ljt',
}
sayHi.bind(obj, 1, 2, 3)()
