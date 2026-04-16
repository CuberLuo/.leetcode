// 静态方法不能挂载到prototype（prototype的方法都是实例方法）
Promise.myAll = function (promiseList) {
  const p = new Promise((resolve, reject) => {
    let i = 0
    const result = []
    // promiseList是一个可迭代对象
    for (const item of promiseList) {
      const index = i
      i++
      // item可能是Promise可能是其他的所以要统一转化为Promise
      Promise.resolve(item).then((data) => {
        // 汇总成功的结果
        result[index] = data //不能使用push因为顺序可能会与传入的不一致
        // 判断是否所有的Promise都成功了
        i--
        if (i === 0) {
          resolve(result)
        }
      }, reject)
    }
    if (i === 0) resolve([])
  })

  return p
}

Promise.myAll([1, 2, 3, 4, Promise.reject(5)]).then(
  (res) => {
    console.log('成功', res)
  },
  (err) => {
    console.log('失败', err)
  },
)
