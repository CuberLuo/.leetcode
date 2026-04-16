import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

;(async () => {
  const lines = []
  for await (const line of rl) {
    lines.push(line)
    // 读到两行就关闭输入流
    if (lines.length === 2) rl.close()
  }

  const n = Number(lines[0]) //第一行输入元素个数
  const arr = lines[1].split(' ').map(item => Number(item))//第二行输入n个元素
  // 以下是具体算法内容
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
  }
  console.log('result: ', sum)
})()
