function getValueByPath(obj, path) {
  // a.b[1].c 变为 a.b.1.c
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')

  let result = obj
  for (const p of paths) {
    result = result[p]
    if (result === undefined) break
  }
  return result
}

const config = { a: { b: [123, { c: 'ok' }] } }
console.log(getValueByPath(config, 'a.b[1].c'))
