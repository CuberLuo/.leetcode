function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
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

const debounceFn = debounce(testFn, 3000) //抖完三秒后触发

let cnt = 0
const interval = setInterval(() => {
  console.log(cnt++)
  debounceFn()
  if (cnt >= 10) clearInterval(interval)
}, 100)
