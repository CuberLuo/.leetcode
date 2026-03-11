/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function heapSort(nums) {
  // 构建大根堆
  // 最后一个非叶子节点
  const lastNonLeafNodeIdx = Math.floor(nums.length / 2) - 1;
  for (let i = lastNonLeafNodeIdx; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }

  // 循环交换堆顶和未排序部分的最后一个元素，然后调整堆
  for (let heapSize = nums.length - 1; heapSize > 0; heapSize--) {
    [nums[0], nums[heapSize]] = [nums[heapSize], nums[0]];
    // 调整剩余元素为新的大根堆
    heapify(nums, 0, heapSize);
  }
  return nums;
}
/**
 * 
 * @param {number[]} heap 堆
 * @param {number} i 需要下滤的节点
 * @param {number} heapSize 当前堆的有效大小
 */
const heapify = (heap, i, heapSize) => {
  let largestIdx = i;
  // 计算左、右子节点索引
  const leftChildIdx = 2 * i + 1;
  const rightChildIdx = 2 * i + 2;
  // 比较当前节点的左右子节点的大小
  if (leftChildIdx < heapSize && heap[leftChildIdx] > heap[largestIdx]) {
    largestIdx = leftChildIdx;
  }
  if (rightChildIdx < heapSize && heap[rightChildIdx] > heap[largestIdx]) {
    largestIdx = rightChildIdx;
  }

  // 如果最大值不是当前节点，交换并递归调整受影响的子树
  if (largestIdx !== i) {
    [heap[i], heap[largestIdx]] = [heap[largestIdx], heap[i]];
    heapify(heap, largestIdx, heapSize);
  }
};



// 测试1：普通乱序数组
const nums1 = [3, 2, 1, 5, 6, 4];
console.log(heapSort(nums1)); // 输出：[1, 2, 3, 4, 5, 6]

// 测试2：包含重复元素的数组
const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(heapSort(nums2)); // 输出：[1, 2, 2, 3, 3, 4, 5, 5, 6]