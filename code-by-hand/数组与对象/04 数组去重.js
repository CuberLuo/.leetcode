function unique(arr) {
  return [...new Set(arr)]
}

console.log(unique([1, 1, 2, 3, 3, 4]))