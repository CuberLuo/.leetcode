function onlyResolvesLast(fn) {
  // 利用闭包保存最新的请求 id
  let id = 0

  return function (...args) {
    const fetchId = id + 1
    id = fetchId

    const result = fn.apply(this, args)

    return new Promise((resolve, reject) => {
      // result 可能不是 Promise，需要包装成 Promise
      Promise.resolve(result)
        .then((value) => {
          if (fetchId === id) resolve(value)
        })
        .catch((error) => {
          if (fetchId === id) reject(error)
        })
    })
  }
}

const fn = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

const wrappedFn = onlyResolvesLast(fn)

wrappedFn(500).then(() => console.log(1))
wrappedFn(1000).then(() => console.log(2))
wrappedFn(100).then(() => console.log(3))
