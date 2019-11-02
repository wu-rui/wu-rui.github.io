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


  /**
   * 返回数组1，但是数组1的数据不能和后面的所有参数的数据有任何一个的重合，
   * 这就是就是difference，需要返回一个新的数组
   * @param {*} ary1 需要处理的数组
   * @param {*} args 需要对比的数组集合
   */
  function difference(ary1, ...args) {
    if (ary1.length === 0) return [];
    if (args.length === 0) return ary1;
    //这句话是数组降维，其实应该写一个多重降维函数
    args = ArraytoArray(args);
    return ary1.reduce((cur, it) => {
      if (!args.includes(it)) {
        cur.push(it)
      }
      return cur;
    }, [])
  }

  /**
   * 这个方法类似 _.difference ，除了它接受一个 iteratee （迭代器）， 
   * 调用array 和 values 中的每个元素以产生比较的标准。 
   * 结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。
   * （首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。 
   * @param {*} ary 
   * @param  {...any} rest 
   */
  function differenceBy(ary, ...rest) {
    let iter = null
    let res = []
    if (rest.length >= 2 && !rest[rest.length] instanceof Array) {
      // 如果最后一个不是数组，那么就是迭代器
      iter = rest.pop()
    }
    rest = ArraytoArray(rest);//数组多重降维
    // 使用构造器返回一个函数
    if (iter !== null) {
      let getValue = iteratee(iter)
      any.forEach((it, idx) => {
        if (rest[idx]) {
          if (getValue(it) !== getValue(rest[idx])) {
            res.push(it)
          }
        } else {
          res.push(it)
        }
      })
    }
    return res;
  }

  /**
   * 数组多重降维
   * @param {} array 
   */
  function ArraytoArray(array) {
    let res = []
    array.forEach((it) => {
      if (it instanceof Array) {
        res.push(...ArraytoArray(it))
      } else {
        res.push(it)
      }
    })
    return res;
  }

  //迭代器
  function iteratee(any) {
    // 是字符串就是返回一个属性值
    if (typeof any === 'string') {
      return property(any)
    }
    // 是函数直接返回函数返回该函数
    else if (typeof any === 'funcion') {
      return val => any(val)

    }
    // 是数组世界返回匹配数组的函数 
    else if (any instanceof Array) {
      return matchesProperty(any)
    }
    // 是对象就直接返回匹配对象的函数 
    else if (typeof any === 'object') {
      return matches(any)
    }
  }
  /**
   * 判断给定的字符串中的每一个属性对应到val数据中，是否为true
   * 返回true，false
   * @param {String} str 
   * @param {Object} val 
   */
  function property(str) {
    return function (val) {
      if (typeof str == 'string') {
        str = str.split('.');
      }
      for (let i of str) {
        val = val[i]
      }
      return !(val === false || val == undefined);
    }
  }


  /**
   * 当对比的数据中出现键值对的时候
   * 需要对比数据是否符合key，val
   * 返回true，false
   * @param {} key 
   * @param {*} val 
   * @param {*} data 
   */
  function matchesProperty(key, val) {
    return function (data) {
      return data[key] == val
    }
  }


  /**
 * 对比val和obj是否相同，返回一个函数
 * @param {*} obj 
 * @returns {Function}
 */
  function matches(source) {
    return function (obj) {
      return isMatch(obj, source)
    }
  }



  // =========================================

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
    if (typeof value !== 'object' || value instanceof RegExp) return value
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
  // ================================




  //基本数据类型判断
  function isArguments(value) {
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
  function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]'
  }
  function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  }
  function isString(value) {
    return typeof value === 'string'
  }
  function isFunction(value) {
    return typeof value === 'function'
  }
  function isNaN(value) {
    return value !== undefined && value.toString() === 'NaN'
  }
  function isUndefined(value) {
    return value === undefined
  }
  function isNil(value) {
    return value === undefined || value === null
  }
  function isNull(value) {
    return value === null
  }
  function isEmpty(value) {
    for (let i in value) {
      return false
    }
    return true
  }
  function isObject(value) {
    if (value === null) return false
    return typeof value === 'object' || typeof value === 'function'
  }
  /**
   * 判断两个数据类型是否完全相等
   * @param {*} a 
   * @param {*} b 
   * 重点注意,相等可以不全等，但是结构和数据一模一样
   * 遍历的时候还有中复杂的情况是包含关系，数据值对比都一样但是b比a多
   * isEqual({"a":[1,2,3]},{"a":[1,2,3]})
   */
  function isEqual(a, b) {
    if (a === b) return true //全等直接返回
    let typeA = Object.prototype.toString.call(a)
    let typeB = Object.prototype.toString.call(b)
    if (typeA !== typeB) return false //严格类型不一样直接返回false
    if (typeof a !== 'object' && a !== b) return false // 如果是同样的原始类型但是数值不一样
    if (mapObject(a).length !== mapObject(b).length) return false //如果属性值个数不一样
    for (let i in a) {
      if (!isEqual(a[i], b[i])) return false //深对比的时候，不匹配
    }
    return true
  }

  /**
   * @function isMatch 
   * 此函数用于对象之间的深度对比,即为：【object是否含有和source【完全】一样的属性值】
   * @param {Object} object 需要判断的对象
   * @param {Object} source 需要进行对比的对象
   * @returns {boolean} true|false
   * @test isMatch({ 'a': 1, 'b': 2 }, { 'b': 2 })=>true
   * @test isMatch({ 'a': 1, 'b': 2 }, { 'b': 1 })=>false
   * @test isMatch({ 'a': 1, 'b': {'c':'wurui','d':[1,2,3,4]}}, { 'b': {'c':'wurui','d':[1,2,3]}})=>true
   * 上面一个测试用例返回true，是因为后面的所有属性及其值，前面都有
   * @test isMatch({ 'a': 1, 'b': {'c':'wurui','d':[1,2,3,4]} }, { 'b': {'c':'wurui','d':[1,2,3,5]}})=>false
   * 这个测试用例的结果为false是因为，后面的d5，不被包含在前面的对象里面
   * !!! 注意不是等价关系，而是包含关系，相等也是包含的一种情况
   */
  function isMatch(object, source) {
    // 若是两个对象完全相等，那么就直接返回true
    if (object === source) return true
    for (let i in source) {
      // 需要判断值是否为对象，若是对象递归调用该函数
      if (typeof source[i] == 'object' && source[i] !== null) {
        if (!isMatch(object[i], source[i])) return false;
      } else {
        // 不是对象直接判断是否相等
        if (object[i] !== source[i]) return false;
      }
    }
    return true;
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
  // ===================================




  return {
    chunk,
    clone,
    cloneDeep,
    compact,
    difference,
    differenceBy,
    ArraytoArray,
    iteratee,
    property,
    matchesProperty,
    matches,
    // 基本数据类型判断
    isArguments,
    isArray,
    isBoolean,
    isDate,
    isEmpty,
    isEqual,
    isError,
    isFunction,
    isNaN,
    isMatch,
    isNil,
    isNull,
    isObject,
    isRegExp,
    isString,
    isUndefined,
    // =========
  }

}()
