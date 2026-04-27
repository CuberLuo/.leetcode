async function retryAsyncFun(task, maxRetries) {
  let count = 0

  while (count <= maxRetries) {
    try {
      const res = await task()
      return res
    } catch (err) {
      console.log('失败重试次数', count)
      count++
      if (count > maxRetries) throw err
    }
  }
}

// 任务1：成功
const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('任务1成功')
    }, 3000)
  })
}

retryAsyncFun(task1, 5) //最多能重试5次
  .then(console.log) //任务1成功
  .catch(console.error)

// 任务2：失败2次后成功
let c = 0
const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      c++ < 2 ? reject('err') : resolve('任务2成功')
    }, 3000)
  })
}

retryAsyncFun(task2, 5)
  .then(console.log) //任务2成功
  .catch(console.error)
