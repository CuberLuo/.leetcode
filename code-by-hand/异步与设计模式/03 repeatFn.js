/**
 * 重复执行函数，间隔 wait 毫秒，共执行 times 次
 * @param {Function} func - 要执行的函数
 * @param {number} times - 执行次数
 * @param {number} wait - 间隔时间(ms)
 * @returns {Promise}
 */
function repeatFn(func, times, wait) {
  function execute(times) {
    if (times <= 0) return
    new Promise((resolve, reject) => {
      setTimeout(() => {
        func()
        resolve()
      }, wait)
    }).then(() => execute(times - 1))
  }
  execute(times)
}

repeatFn(
  () => {
    console.log('hello world')
  },
  5,
  3000,
)
