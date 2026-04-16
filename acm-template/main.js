// 使用CommonJS需要移除package.json中的"type": "module"
// const readline = require('readline')
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const lines = []
rl.on('line', (line) => {
  lines.push(line)
  if (lines.length === 2) rl.close()
}).on('close', () => {
  const n = Number(lines[0])
  const arr=lines[1].split(' ').map(item => Number(item))
  // 以下是具体算法内容
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
  }
  console.log('result: ', sum)
})