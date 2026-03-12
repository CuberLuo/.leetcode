/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function heapSort(nums) {
  // 构建大根堆
  // 最后一个非叶子节点
  const lastNonLeafIdx = Math.floor(nums.length / 2) - 1;
  for (let i = lastNonLeafIdx; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }

  let heapSize = nums.length
  // 循环交换堆顶和未排序部分的最后一个元素，然后调整堆
  while (heapSize > 0) {
    [nums[0], nums[heapSize - 1]] = [nums[heapSize - 1], nums[0]];
    heapSize--
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
  let maxIndex = i;
  // 计算左、右子节点索引
  const leftChildIdx = 2 * i + 1;
  const rightChildIdx = 2 * i + 2;
  // 比较当前节点的左右子节点的大小
  if (leftChildIdx < heapSize && heap[leftChildIdx] > heap[maxIndex]) {
    maxIndex = leftChildIdx;
  }
  if (rightChildIdx < heapSize && heap[rightChildIdx] > heap[maxIndex]) {
    maxIndex = rightChildIdx;
  }

  // 如果最大值不是当前节点，交换并递归调整受影响的子树
  if (maxIndex !== i) {
    [heap[i], heap[maxIndex]] = [heap[maxIndex], heap[i]];
    heapify(heap, maxIndex, heapSize);
  }
};



// 测试1：普通乱序数组
const nums1 = [3, 2, 1, 5, 6, 4];
console.log(heapSort(nums1)); // 输出：[1, 2, 3, 4, 5, 6]

// 测试2：包含重复元素的数组
const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(heapSort(nums2)); // 输出：[1, 2, 2, 3, 3, 4, 5, 5, 6]