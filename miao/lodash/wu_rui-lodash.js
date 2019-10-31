var wu_rui = function () {

  function chunk(ary, size = 1) {
    let res = [];
    let i = 0;
    if (ary.length == 0 || ary.length < size) return ary;
    while (i + size <= ary.length) {
      res.push(ary.slice(i, i + size))
      i = i + size <= ary.length ? i + size : i
    }
    i < ary.length && res.push(ary.slice(i, ary.length))
    return res;
  }
  function clone(value) {
    var dst = {};
    for (var prop in value) {
      if (value.hasOwnProperty(prop)) {
        dst[prop] = value[prop];
      }
    }
    return dst;
  }
  function cloneDeep(value) {
    // 如果不是引用对象就直接返回
    if (typeof value !== 'object') {
      return value
    }
    let res = value instanceof Array ? [] : {}
    for (let prop in value) {
      // 是复杂类型并且不是null
      if (typeof value[prop] === 'object' && value[prop] !== null) {
        res[prop] = cloneDeep(value[prop])
      } else {
        res[prop] = value[prop]
      }
    }
    return res;
  }
  return {
    chunk,
    clone,
    cloneDeep
  }
}()
