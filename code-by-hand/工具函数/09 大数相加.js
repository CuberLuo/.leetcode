/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 */
function addBigNum(num1, num2) {
  let result = ''
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  while (i >= 0 || j >= 0 || carry > 0) {
    let val1 = num1[i] ? Number(num1[i--]) : 0
    let val2 = num2[j] ? Number(num2[j--]) : 0
    let sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    result = (sum % 10) + result
  }

  return result
}

console.log(addBigNum('123456789012345678901234567890', '987654321098765432109876543210'))