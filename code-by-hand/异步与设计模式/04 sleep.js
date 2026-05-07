const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

// 测试
async function test() {
  console.log('start')
  await sleep(1000)
  console.log('1s later')
}
test()
