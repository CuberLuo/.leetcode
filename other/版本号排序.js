function sortVersions(versions, isAsc = true) {
  return versions.sort((a, b) => {
    const arrA = a.split('.').map(Number)
    const arrB = b.split('.').map(Number)

    const maxLen = Math.max(arrA.length, arrB.length)
    for (let i = 0; i < maxLen; i++) {
      const numA = arrA[i] || 0 // 不足位补0
      const numB = arrB[i] || 0

      if (numA === numB) continue
      return isAsc ? numA - numB : numB - numA
    }
    return 0//两个版本号相等则返回0
  })
}

console.log(sortVersions(['1.20.1', '1.20.2', '1.8', '1.8', '1.12']))