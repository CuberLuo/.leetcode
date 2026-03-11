/**
 * @param {number[]} nums 
 * @returns {number[]}
 */
const mergeSort = (nums) => {
  if (nums.length === 1) return nums
  const mid = Math.floor(nums.length / 2)
  const leftArr = mergeSort(nums.slice(0, mid))
  const rightArr = mergeSort(nums.slice(mid))
  return merge(leftArr, rightArr)
}
/**
 * 
 * @param {number[]} leftArr 
 * @param {number[]} rightArr 
 */
const merge = (leftArr, rightArr) => {
  if (leftArr.length === 0) return rightArr
  if (rightArr.length === 0) return leftArr

  if (leftArr[0] < rightArr[0]) {
    return [leftArr[0], ...merge(leftArr.slice(1), rightArr)]
  } else {
    return [rightArr[0], ...merge(rightArr.slice(1), leftArr)]
  }
}

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
console.log(mergeSort(nums))
