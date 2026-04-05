import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

;(async () => {
  const lines = []
  for await (const line of rl) {
    lines.push(line)
  }

  const n = Number(lines[0]) //第一个参数是行数
  // 以下是具体算法内容
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += Number(lines[i])
  }
  console.log('result: ', sum)
})()
