class Scheduler {
  #parallelCnt
  #tasks = []
  #runningCnt = 0
  constructor(parallelCnt) {
    this.#parallelCnt = parallelCnt
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.#tasks.push({ task, resolve, reject })
      this.#run()
    })
  }
  #run() {
    while (this.#runningCnt < this.#parallelCnt && this.#tasks.length > 0) {
      const { task, resolve, reject } = this.#tasks.shift()
      task()
        .then(resolve, reject)
        .finally(() => {
          this.#runningCnt--
          this.#run() //继续执行下一个任务
        })
      this.#runningCnt++
    }
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const MAX_LENGTH = 2
const scheduler = new Scheduler(MAX_LENGTH)

const addTask = (time, order) => {
  scheduler
    .add(() => {
      return timeout(time)
    })
    .then(() => {
      console.log('任务', order, '已完成')
    })
}

addTask(10000, '1') //10000ms后输出：任务1完成
addTask(5000, '2') //5000ms后输出：任务2完成
addTask(3000, '3') //8000ms后输出：任务3完成
addTask(4000, '4') //12000ms后输出：任务4完成
addTask(5000, '5') //15000ms后输出：任务5完成
