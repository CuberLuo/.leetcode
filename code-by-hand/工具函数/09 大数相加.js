function addBigNum(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let result = ''
  while (i >= 0 || j >= 0 || carry > 0) {
    let val1 = i >= 0 ? Number(num1[i--]) : 0
    let val2 = j >= 0 ? Number(num2[j--]) : 0
    let sumVal = val1 + val2 + carry
    carry = Math.floor(sumVal / 10)
    result = (sumVal % 10) + result
  }
  return result
}

console.log(addBigNum('123', '123'))