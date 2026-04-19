/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function quickSort(arr) {
  if (arr.length === 0) return arr
  const pivot = arr[Math.floor(Math.random() * arr.length)]
  const left = arr.filter(num => num < pivot)
  const mid = arr.filter(num => num === pivot)
  const right = arr.filter(num => num > pivot)
  return [...quickSort(left), ...mid, ...quickSort(right)]
}

// 测试
const arr = [3, 1, 1, 5, 2, 4];
console.log(quickSort(arr)); // 输出: [1, 1, 2, 3, 4, 5]