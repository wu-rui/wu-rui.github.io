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

  //基本数据类型判断
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
    return Object.prototype.toString.call(value) === '[object Date]'
  }
  function isEmpty(value) {
    for (let i in value) {
      return false
    }
    return true
  }
  /**
   * 判断两个数据类型是否完全相等
   * @param {*} a 
   * @param {*} b 
   * 重点注意,相等可以不全等，但是结构和数据一模一样
   * 遍历的时候还有中复杂的情况是包含关系，数据值对比都一样但是b比a多
   */
  function isEqual(a, b) {
    if (a === b) return true
    let typeA = Object.prototype.toString.call(a)
    let typeB = Object.prototype.toString.call(b)
    if (typeA !== typeB) return false
    if (mapObject(a).length !== mapObject(b).length) return false
    for (let i in a) {
      if (a[i] != b[i]) return false
      if (!isEqual(a[i], b[i])) return false
    }
    return true
  }
  // 遍历对象的所有属性返回一个数组
  function mapObject(val) {
    let res = []
    for (let i in val) {
      if (typeof val[i] === 'object') {
        res.push(...mapObject(val[i]))
      } else {
        res.push(i)
      }
    }
    return res;
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
    isEqual,
  }

}()
