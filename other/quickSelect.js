/**
 * 数组中第k小的元素
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
function findKthSmallest(nums, k) {
  // 随机选择一个数作为pivot
  const pivot = nums[Math.floor(Math.random() * nums.length)]
  // 升序
  const left = nums.filter(x => x < pivot)
  const mid = nums.filter(x => x === pivot)
  const right = nums.filter(x => x > pivot)

  if (k <= left.length) return findKthSmallest(left, k)
  else if (k <= left.length + mid.length) return pivot
  else return findKthSmallest(right, k - left.length - mid.length)
}

console.log(findKthSmallest([3, 2, 1, 4, 5, 6], 2))
/**
 * 数组中第k大的元素
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
function findKthLargest(nums, k) {
  const pivot = nums[Math.floor(Math.random() * nums.length)]
  // 降序
  const left = nums.filter(x => x > pivot)
  const mid = nums.filter(x => x === pivot)
  const right = nums.filter(x => x < pivot)

  if (k <= left.length) return findKthLargest(left, k)
  else if (k <= left.length + mid.length) return pivot
  else return findKthLargest(right, k - left.length - mid.length)
}

console.log(findKthLargest([3, 2, 1, 4, 5, 6], 2))