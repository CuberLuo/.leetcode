const execute = (cnt) => {
  new Promise((resolve) => {
    let light
    let timeout
    if (cnt % 3 === 0) {
      light = '🔴'
      timeout = 3000
    } else if (cnt % 3 === 1) {
      light = '🟡'
      timeout = 2000
    } else {
      light = '🟢'
      timeout = 1000
    }
    setTimeout(() => {
      console.log(light)
      cnt++
      resolve(cnt)
    }, timeout)
  }).then((cnt) => {
    execute(cnt)
  })
}
execute(0)
