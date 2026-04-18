function formatNumber(num) {
  let [int, dec] = num.toString().split('.')
  const isDec = dec != null
  const isNegative = int[0] === '-'
  if (isNegative) int = int.slice(1)

  let result = ''
  let cnt = 0
  for (let i = int.length - 1; i >= 0; i--) {
    cnt++
    result = int[i] + result
    if (cnt % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }
  return (isNegative ? '-' : '') + result + (isDec ? '.' + dec : '')
}

console.log(formatNumber(1110.5))