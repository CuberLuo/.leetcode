function parseQuery(url) {
  const query = url.split('?')[1]
  if (!query) return {}

  const params = query.split('&')
  const res = {}

  for (const param of params) {
    let [key, value] = param.split('=')
    // 无值的 key 为 true
    value = value ? decodeURIComponent(value) : true
    // 能转数字就转数字
    if (value !== true) {
      value = isNaN(Number(value)) ? value : parseFloat(value)
    }
    // 重复 key 转数组
    if (res.hasOwnProperty(key)) {
      res[key] = [].concat(res[key], value)
    } else {
      res[key] = value
    }
  }

  return res
}

console.log(parseQuery('?name=Tom&age=18'))
// { name: 'Tom', age: 18 }

console.log(parseQuery('?id=1&id=2&city=%E5%8C%97%E4%BA%AC&enabled'))
// { id: [1, 2], city: '北京', enabled: true }
