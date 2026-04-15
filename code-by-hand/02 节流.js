function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function testFn() {
  console.log('test')
}

const throttleFn = throttle(testFn, 1000) //一秒只触发一次

let cnt = 0
const interval = setInterval(() => {
  console.log(cnt++)
  throttleFn()
  if (cnt >= 30) clearInterval(interval)
}, 100)
