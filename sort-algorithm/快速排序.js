function quickSort(arr) {
  if (arr.length === 0) return arr

  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr[midIndex]

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      const num = arr[i]
      if (num < midValue) left.push(num)
      else right.push(num)
    }
  }
  return [...quickSort(left), midValue, ...quickSort(right)]
}

// 测试
const arr = [3, 1, 5, 2, 4];
console.log(quickSort(arr)); // 输出: [1, 2, 3, 4, 5]