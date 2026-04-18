// 静态方法不能挂载到prototype（prototype的方法都是实例方法）
Promise.myAll = function (promiseList) {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const result = []
    // promiseList是一个可迭代对象
    for (const item of promiseList) {
      const index = cnt
      cnt++
      // item可能是Promise可能是其他的所以要统一转化为Promise
      Promise.resolve(item).then((data) => {
        result[index] = data //不能使用push因为顺序可能会与传入的不一致
        cnt--
        if (cnt === 0) resolve(result)
      }).catch((err) => reject(err))
    }
    if (cnt === 0) resolve([])//处理promiseList为空的情况
  })
}

Promise.myAll([1, 2, 3, 4, Promise.reject(5)]).then(
  (res) => {
    console.log('成功', res)
  },
  (err) => {
    console.log('失败', err)
  },
)
