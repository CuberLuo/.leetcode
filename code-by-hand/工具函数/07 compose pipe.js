// compose：从右到左
const compose = (...fnList) => {
  return (initValue) => {
    return fnList.reduceRight((acc, fn) => fn(acc), initValue)
  }
}

// pipe：从左到右
const pipe = (...fnList) => {
  return (initValue) => {
    return fnList.reduce((acc, fn) => fn(acc), initValue)
  }
}

const add1 = (x) => x + 1
const mul2 = (x) => x * 2
const square = (x) => x * x

console.log(compose(add1, mul2, square)(2)) // (2^2 * 2) + 1 = 9
console.log(pipe(square, mul2, add1)(2)) // (2^2 * 2) + 1 = 9
