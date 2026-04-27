function createRequestWrapper() {
  // 缓存放在闭包里，外部访问不到
  const requestCache = new Map()

  return function wrapRequest(key, fn) {
    //缓存中有则从缓存中取
    if (requestCache.has(key)) {
      return requestCache.get(key)
    }

    const promise = fn()
      .then((res) => res)
      .catch((err) => {
        requestCache.delete(key)
        return Promise.reject(err)
      })
      .finally(() => {
        requestCache.delete(key)
      })

    requestCache.set(key, promise)
    return promise
  }
}

const wrapRequest = createRequestWrapper()

function fetchUserInfo() {
  console.log('【真正发送请求】')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'test', id: 1 })
    }, 2000)
  })
}

// 并发测试：同时调用5次，只会发1次请求
for (let i = 0; i < 5; i++) {
  wrapRequest('api/user/info', fetchUserInfo).then((res) => {
    console.log('请求结果', res)
  })
}
