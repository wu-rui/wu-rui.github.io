var wu_rui = function () {

  //数组分割，不改变原数组
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
  function compact(array) {
    return array.filter(it => it)
  }

  // 浅拷贝
  function clone(value) {
    var dst = {};
    for (var prop in value) {
      if (value.hasOwnProperty(prop)) {
        dst[prop] = value[prop];
      }
    }
    return dst;
  }

  // 深拷贝,深拷贝的要点是，克隆出来的数据可以随意修改不会改变原本被克隆的值
  function cloneDeep(value) {
    // 如果不是引用对象就直接返回，注意排查正则，typeof的时候也是object
    if (typeof value !== 'object' || value instanceof RegExp) {
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

  function isArgument(value) {
    return Object.prototype.toString.call(value) === '[object Argument]'
  }

  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
  function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  }
  function isDate(value) {
    return Object.prototype.toString.call(value) === '[object isDate]'
  }
  function isEmpty(value) {
    for (let i in value) {
      return false
    }
    return true
  }

  return {
    chunk,
    clone,
    cloneDeep,
    compact,
    isArgument,
    isArray,
    isBoolean,
    isDate,
    isEmpty,
  }

}()
