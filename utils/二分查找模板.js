function binSearch(arr, x) {
  const n = arr.length;
  let l = -1;
  let r = n;

  while (r - l > 1) {
    let mid = l + Math.floor((r - l) / 2);
    if (isGreen(arr[mid], x)) {
      r = mid;
    } else {
      l = mid;
    }
  }

  return r;
}

// 示例：假设 isGreen 是判断 arr[mid] >= x（找第一个 >= x 的位置）
function isGreen(value, target) {
  return value >= target;
}