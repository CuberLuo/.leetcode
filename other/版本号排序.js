function sortVersions(versions, isAsc = true) {
  return [...versions].sort((a, b) => {
    // 1. 转数字数组
    const arrA = a.split('.').map(Number);
    const arrB = b.split('.').map(Number);

    // 2. 取最大长度，逐位对比
    const maxLen = Math.max(arrA.length, arrB.length);
    for (let i = 0; i < maxLen; i++) {
      const numA = arrA[i] || 0; // 不足位补0
      const numB = arrB[i] || 0;

      if (numA !== numB) {
        // 升序：numA - numB；降序：numB - numA
        return isAsc ? numA - numB : numB - numA;
      }
    }
    return 0;
  });
}