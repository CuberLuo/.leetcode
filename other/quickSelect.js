import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
;(async () => {
  const lines = []
  for await (const line of rl) {
    lines.push(line)
    if(lines.length===2) rl.close()
  }
  const [n, k] = lines[0].split(' ').map(item => Number(item))
  const arr = lines[1].split(' ').map(item => Number(item))
  console.log('output:', quickSelect(arr,k))
})()

function quickSelect(arr, k) {
  let left = 0
  let right = arr.length - 1
  // const target = k - 1 // 第 k 小
  const target = arr.length - k //第 k 大

  while (left <= right) {
    const pivot = arr[right]
    let i = left

    // 扫描[left,right)将比pivot小的元素放到i位置，i向右移动
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]]
    // 此时pivot左边的数都比pivot小，pivot右边的数都比pivot大

    if (i === target) return arr[i]
    if (i < target) left = i + 1 //目标在右边
    else right = i - 1 //目标在左边
  }
}

// console.log(quickSelect([3, 2, 1, 5, 6, 4], 2))

