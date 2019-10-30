var wu_rui = function () {

  function chunk(ary, size = 1) {
    if (ary.length == 0) return []
    let res = []
    let cur = []
    for (let i = 0; i < ary.length; i++) {
      cur.push(ary[i])
      if (cur.length == size || i == ary.length - 1) {
        res.push(cur)
        cur = []
      }
    }
    return res;
  }

  function drop(array, n = 1) {
    return n == 0 ? array : array.slice(n)
  }


  function forEach(collection, iteratee = null) {
    if (iteratee == null) return collection;
    for (let key in collection) {
      iteratee(collection[key], key, collection)
    }
    return collection;
  }

  /**
 * 从右到左遍历数组，即为逆向遍历
 * 返回：原本的集合
 */
  function forEachRight(collection, iteratee = null) {
    if (iteratee == null) return collection;
    let right = []
    for (let key in collection) {
      right.push(key)
    }
    for (let i = right.length - 1; i > -1; i--) {
      let val = collection[right[i]]
      let key = right[i]
      iteratee(val, key, collection)
    }
    return collection;
  }

  function dropRight(array, n = 1) {
    if (n >= array.length) return [];
    return array.slice(0, array.length - n)
  }


  /**
   * 这里理解题意很重要
   * 从右往左遍历，需要去掉当遇到第一个false的时候的所有后面的数据，返回第一个false的位置的内容
   * @param {Array} array 
   * @param {Function/Object/Array/String} param1 
   * 若传入对比对象，则对比对象中的每一个值是否在val中对应
   * 若传入数组，则通过键值对对比，PS：测试用例看起来像是这个意思
   */
  function dropRightWhile(array, predicate = null) {
    if (predicate == null) return array;
    let n = array.length;
    let type = typeof predicate;
    if (predicate instanceof Array) type = 'array'
    for (let i = n - 1; i > -1; i--) {
      let val = array[i]
      let cur = true;
      switch (type) {
        case 'string':
          cur = val[predicate]
          break;
        case 'function':
          cur = predicate(val, i, array)
          break;
        case 'object':
          for (let v in predicate) {
            if (val[v] !== predicate[v]) {
              cur = false;
              break;
            }
          }
          break;
        case 'array':
          for (let v = 0; v < predicate.length; v++) {
            if (predicate[v + 1] !== undefined) {
              if (val[predicate[v]] !== predicate[v + 1]) {
                cur = false;
                break;
              }
            }
          }
          break;
        default:
          break;
      }
      if (cur == false) {
        n = i;
        break;
      }
    }
    return array.slice(0, n + 1);
  }

  /**
   * 这个函数和dropRightWhile很相似，一个从前往后遍历，一个从后往前遍历，
   * 一个删除遇到第一个false的后面的所有数据
   * 一个删除遇到的最后一个false的之前的数据，保留后面的数据
   * @param {Array} array 
   * @param {Function} predicate 
   */
  function dropWhile(array, predicate = null) {
    if (predicate == null) return array;
    let n = 0;
    let type = typeof predicate;
    if (predicate instanceof Array) type = 'array'
    for (let i = 0; i < array.length; i++) {
      let val = array[i]
      let cur = true;
      switch (type) {
        case 'string':
          cur = val[predicate]
          break;
        case 'function':
          cur = predicate(val, i, array)
          break;
        case 'object':
          for (let v in predicate) {
            if (val[v] !== predicate[v]) {
              cur = false;
              break;
            }
          }
          break;
        case 'array':
          for (let v = 0; v < predicate.length; v++) {
            if (predicate[v + 1] !== undefined) {
              if (val[predicate[v]] !== predicate[v + 1]) {
                cur = false;
                break;
              }
            }
          }
          break;
        default:
          break;
      }
      if (cur == false) {
        n = i;
        break;
      }
    }
    return array.slice(n);
  }


  /**
 * 找到第一个比较为true的数据的下标
 * @param {*} array 
 * @param {*} predicate 
 * @param {*} fromIndex 
 */
  function findIndex(array, predicate = null, fromIndex = 0) {
    if (predicate == null) return 0;
    let res = -1;
    let type = getType(predicate)
    for (let i = fromIndex; i < array.length; i++) {
      let val = array[i]
      let cur = false;
      switch (type) {
        case 'function':
          cur = predicate(val)
          break;
        case 'string':
          return findIndex(array, property(predicate), fromIndex)
        case 'array':
          return findIndex(array, matchesProperty(predicate[0], predicate[1]), fromIndex)
        case 'object':
          return findIndex(array, matches(predicate), fromIndex)
        default:
          break;
      }
      if (cur) {
        res = i;
        break;
      }
    }
    return res;
  }




  /**
   * 和findIndex类似，只不过从后面往前遍历
   * @param {*} array 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  function findLastIndex(array, predicate = null, fromIndex = array.length - 1) {
    if (predicate == null) return 0;
    let res = -1;
    let type = getType(predicate)
    for (let i = fromIndex; i > -1; i--) {
      let val = array[i]
      let cur = false;
      switch (type) {
        case 'function':
          cur = predicate(val)
          break;
        case 'string':
          return findLastIndex(array, property(predicate), fromIndex)
        case 'array':
          return findLastIndex(array, matchesProperty(predicate[0], predicate[1]), fromIndex)
        case 'object':
          return findLastIndex(array, matches(predicate), fromIndex)
        default:
          break;
      }
      if (cur) {
        res = i;
        break;
      }
    }
    return res;
  }




  /**
   * 对比val和obj是否相同，返回一个函数
   * @param {*} obj 
   * @returns {Function}
   */
  // function matches(obj) {
  //   return function (val) {
  //     let res = true;
  //     for (let v in obj) {
  //       if (obj[v] !== val[v]) {
  //         res = false;
  //         break;
  //       }
  //     }
  //     return res;
  //   }
  // }
  function matches(source) {
    return function (obj) {
      return isMatch(obj, source)
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
   * 返回传入值的原型类型
   * array，string，object，function
   * @param {*} val 
   */
  function getType(val) {
    let type = typeof val;
    if (val instanceof Array) type = 'array';
    return type;
  }


  /**
   * 
   * @param {Array} ary 
   * @param {Object} val 
   * @param {Number} start 
   * @param {Number} end
   * 默认接受四个参数，分别是需要改造的数组 ，需要改变的值
   * 后面的start和end选填 ，为需要改变的起始范围，不穿默认改变整个数组
   */
  function fill(ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = val
    }
    return ary;
  }


  function map(array, iteratee = null) {
    let idx = -1;
    const length = array.length
    if (!length) return []

  }
  function map(array, iteratee) {
    let index = -1
    const length = array == null ? 0 : array.length
    const result = new Array(length)

    while (++index < length) {
      result[index] = iteratee(array[index], index, array)
    }
    return result
  }

  /**
   * 接受多个参数，第一个是需要判断的数组
   * 后面的所有参数，是用作对比的数组集
   * 找出第一个数组与后面所有数组没有相同数据的数组返回
   */
  function difference(array, value = []) {
    let res = []
    let data = {}
    if (value.length > 0) {
      if (arguments.length > 2) {
        for (let i = 2; i < arguments.length; i++) {
          value.push(...arguments[i])
        }
      }
      value.map((v) => {
        data[v] = v;
      })
    }
    if (array.length > 0) {
      array.map((a) => {
        if (!(a in data)) {
          res.push(a)
        }
      })
    }
    return res
  }

  /**
   * differenceBy接受多个参数，第一个参数是需要选择的数组，从第二个参数到最后的参数都是选择条件，
   * 若是第一个参数的数据在后面的任意一个条件中存在，则删除，
   * 返回不满足后面所有条件的数据组成的数组
   * @param {Array} ary 
   * @param  {...any} values 
   * @param {Function/Array/Object/String} iteratee 
   */
  function differenceBy(ary, ...rest) {
    let res = []
    let iteratee = rest.pop()
    rest = rest.reduce(function add(res, it) {
      return res = res.concat(it)
    }, [])
    // 全是数组的情况
    let type = typeof iteratee;
    if (iteratee instanceof Array) {
      type = 'array'
      rest.push(...iteratee)
    }
    for (let y of ary) {
      let equal = true;
      for (let v of rest) {
        let a = null;
        let b = null;
        switch (type) {
          case 'string':
            a = y[iteratee]
            b = v[iteratee]
            break;
          case 'function':
            a = iteratee(y)
            b = iteratee(v)
            break;
          case 'array':
            a = y;
            b = v;
            break;
          default:
            break
        }
        if (a == b) {
          equal = false;
          break;
        }
      }
      equal == false ? '' : res.push(y);
    }
    return res;
  }

  /**
   * 通过comparatorb比较器，比较前面两个数组是否有相同的数据，
   * 筛选数组1不同于数组2的数据，返回数据集合数组
   * @param {Array} array 
   * @param {...Array} values 
   * @param {Function} comparator (array, values )
   */
  function differenceWith(array, values = null, comparator = null) {
    if (values == null) return array;
    let res = []
    for (let a of array) {
      let cur = true;
      for (let val of values) {
        if (comparator == null) {
          if (a == val) {
            cur = false;
            break;
          }
        } else {
          if (comparator(a, val)) {
            cur = false;
            break;
          }
        }
        cur == false ? '' : res.push(a)
      }
    }
    return res;
  }

  function compact(ary) {
    return ary.filter(it => it)
  }

  function curry(f, n = 0) {
    if (!f) return curry;
    n = f.length;
    let ary = arguments[2] || [];
    return function (...arg) {
      ary.push(...arg)
      if (ary.length < n) {
        return curry(f, n, ary);
      } else {
        return f(...ary.slice(0, n))
      }
    }
  }
  function spread(func) {
    return function (ary) {
      return func.apply(null, ary)
    }
  }

  /**
   * 记忆化函数
   * @param {Function} f
   *  
   */
  function memoize(f) {
    let cache = {}
    return function (arg) {
      if (arg in cache) {
        return cache[arg]
      } else {
        return cache[arg] = f(arg)
      }
    }
  }
  // function memoize(f) {
  //   let cache = new Map()
  //   function memoized(arg) {
  //     if (cache.has(arg)) {
  //       return cache.get(arg)
  //     } else {
  //       cache.set(arg, f(arg))
  //       return cache.get(arg)
  //     }
  //   }
  //   memoized.cache = cache;
  //   return memoized;
  // }

  function ary(func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n));
    }
  }


  function unary(func, n = func.length) {
    return ary(func, 1)
  }

  function negate(f) {
    return function (...args) {
      return !f(...args);
    }
  }

  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }


  function before(n, func) {
    var times = 0;
    var lastRes = null;
    return function (...args) {
      times++;
      if (times < n) {
        return lastRes = func(...args)
      } else {
        return lastRes;
      }
    }
  }

  /**
   * 创建一个对象
   * key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果
   * 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的
   * 每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数：(value)
   * 这里还需要理解传入的参数的iteratee为数组和对象的情况，但是没有例子，无法理解
   */
  function groupBy(collection, iteratee = null) {
    let res = {}
    let key = null;
    // TODO： 这里需要判断四种情况，obejct，function，array，string
    let type = typeof iteratee;
    if (iteratee instanceof Array) {
      type = 'array'
    }
    for (let val of collection) {
      key = type == 'string' ? val[iteratee] : iteratee(val)
      if (!res[key]) {
        res[key] = [val]
      } else {
        res[key].push(val)
      }
    }
    return res;
  }

  /**
   * get是用于判断，object对象中，是否有ptah这样的属性路径，并且返回其值
   * @param {Object} object 
   * @param {Array/String} path 
   * @param {*} defaultValue 
   */
  function get(object, path, defaultValue = null) {
    let res = null;
    // path有两种情况，字符串和数组,字符串需要切割为数组
    if (typeof path == 'string') {
      path = path.split(/(?:\[|(?:\]\[)|\.|(?:\]\.)|\])/)
    }
    for (let i of path) {
      if (object == undefined) break;
      res = object = object[i]
    }
    if (res == null && defaultValue != null) return defaultValue;
    return res;
  }

  /**
   * 判断是不是自有属性，应该用hasOwnPropoty判断
   * @param {*} object 
   * @param {*} path 
   */
  // function has(object, path) {
  //   let res = get(object, path, 'undefined')
  //   if (res == 'undefined' || res == undefined || res == null || res == {}) return false
  //   return true;
  // }


  /**
   * 将数组，降低一个层级
   * @param {Array} ary 
   */
  function flatten(ary) {
    return [].concat(...ary)
  }


  /**
   * 将数组递归为一维数组
   * @param {Array} ary 
   */
  function flattenDeep(ary) {
    let res = []
    for (let val of ary) {
      if (val instanceof Array) {
        let cur = flattenDeep(val)
        res = res.concat(cur)
      } else {
        res.push(val)
      }
    }
    return res;
  }

  /**
   * 将数组按照数字要求降维
   * @param {Array} ary 
   * @param {Number} depth 
   */
  function flattenDepth(ary, depth = 1) {
    let res = []
    if (depth == 0) return ary;
    for (let val of ary) {
      if (val instanceof Array) {
        let cur = flattenDepth(val, depth - 1)
        res = res.concat(cur)
      } else {
        res.push(val)
      }
    }
    return res;
  }



  /**
   * 接受数组作为键值对，返回一个对象
   * 不需要实现，深对象，只是浅实现
   * 所以数组也只是二维数组
   * @param {Array} pairs 
   */
  function fromPairs(pairs) {
    let res = {};
    for (let val of pairs) {
      res[val[0]] = val[1]
    }
    return res;
  }


  /**
   * 返回数组的第一个元素
   * 这种题...干嘛用？
   * @param {Array} ary 
   */
  function head(ary) {
    return ary[0]
  }



  /**
   * 返回从formindex的下标开始找第一个是value的数据的下标
   * @param {*} array 
   * @param {*} value 
   * @param {*} fromIndex 
   */
  function indexOf(array, value, fromIndex = 0) {
    let i = fromIndex;
    for (i; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      } else if (array[i] !== value && array[i] !== array[i] && value !== value) {
        return i;
      }
    }
    return -1;
  }


  /**
   * 返回从formindex的下标从后往前开始找第一个是value的数据的下标
   * @param {*} array 
   * @param {*} value 
   * @param {*} fromIndex 
   */
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    let i = fromIndex;
    for (i; i > -1; i--) {
      if (array[i] == value) {
        return i;
      } else if (array[i] !== value && array[i] !== array[i] && value !== value) {
        return i;
      }
    }
    return -1;
  }



  /**
   * 去掉数组的最后一个元素
   * @param {*} ary 
   */
  function initial(ary) {
    ary.pop()
    return ary;
    // return ary.slice(0, ary.length - 1)
  }


  // 数组去重
  function uniq(array) {
    let data = {}
    let res = []
    for (let val of array) {
      if (!(data[val])) {
        res.push(val)
        data[val] = val;
      }
    }
    return res;
  }


  /**
   * 将 array 中的所有元素转换为由 separator 分隔的字符串。
   * @param {*} array 
   * @param {*} param1 
   */
  function join(array, separator = ',') {
    return array.toString().replace(/\,/g, separator)
  }


  /**
   * 返回数组最后一个元素
   * @param {*} array 
   */
  function last(array) {
    return array[array.length - 1]
  }

  /**
   * 返回数组的第几个元素，接受负数
   * @param {*} array 
   * @param {*} n 
   */
  function nth(array, n = 0) {
    return n < 0 ? array[array.length + n] : array[n]
  }


  /**
   * 移除数组array中所有和给定值相等的元素，进行全等比较。 
   * 这个是改变原数组的函数，而不是返回新的函数
   */

  function pull(array, ...values) {
    let res = []
    array.map(it => values.indexOf(it) == -1 ? res.push(it) : '')
    return array = res;
  }

  /**
   * 和pull类似，但是只接受两个参数
   * 第二个需要对比的参数为一个数组
   *  [1, 2, 3, 1, 2, 3]&[2,3]=>[1,1]
   * 严谨做法
   */
  function pullAll(array, values) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      // 如果包含的话
      if (values.includes(array[i])) {
        array.splice(i--, 1)
      }
    }
    return array;
  }


  /**
   * 移除数组中的返回真值的数据
   * @param {*} ary 
   * @param {*} predicate 
   */
  function remove(ary, predicate = true) {
    let res = []
    for (let i in ary) {
      if (predicate(ary[i], i, ary)) {
        res.push(ary[i])
      }
    }
    return res;
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


  /**
   * 判断两个对象是否完全相等
   * @param {*} obj1 
   * @param {*} obj2 
   * @test isEqual({},{}) =>true
   * @test isEqual([1],[2]) =>false
   * @test isEqual({'a':1,'b':2},{'b'：2}) =>true
   * @test isEqual([1,2],{"0":1,"1":2,"length":2})
   */
  function isEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 === typeof obj2 && Array.isArray(obj1) == Array.isArray(obj2)) {
      if (typeof obj1 == 'object' && typeof obj2 == 'object') {
        for (let i in obj1) {
          if (typeof obj1[i] == 'object' && typeof obj2[i] == 'object') {
            if (!isEqual(obj1[i], obj2[i])) return false;
          } else {
            if (obj1[i] !== obj2[i]) return false
          }
        }
        for (let i in obj2) {
          if (typeof obj1[i] == 'object' && typeof obj2[i] == 'object') {
            if (!isEqual(obj1[i], obj2[i])) return false;
          } else {
            if (obj1[i] !== obj2[i]) return false
          }
        }
        return true;
      } else {
        return obj1 === obj2;
      }
    } else {
      return false;
    }
  }


  /**
   * 转化 字符串 为属性路径的数组 。
   * toPath('a.b.c')=> ['a', 'b', 'c']
   * toPath('a[0].b.c')=> ['a', '0', 'b', 'c']
   * @param {String} str 
   */
  function toPath(str) {//a.b.0.c[fooo][bar].d
    return typeof str == 'string' ? str.split(/\.|\[|\]./g) : str;
  }

  /**
   * 判断path表示的属性路径是否是object的自有属性
   * @param {Object} object 
   * @param {String/Array} path 
   */
  function has(object, path) {
    path = toPath(path)
    for (let val of path) {
      if (!object.hasOwnProperty(val)) {
        return false;
      } else {
        object = object[val]
      }
    }
    return true;
  }


  function wrap() {
    return function (...args) {
      return wrapper(f, ...args)
    }
  }



  /**
   * 求所有数组的并集(不重复的并集)
   * @param  {Arrays} array 
   * @test intersection([1,2,3,4,3],[3,4,3,5,7])=>[3, 4]
   */
  function intersection(...array) {
    let cur = array[0]
    if (array.length > 1) {
      array.slice(1).forEach(eachAry => {
        cur = cur.length == 0 ? '' : hasSameData(cur, eachAry)
      });
    }
    return cur;
  }

  function hasSameData(cur, ary) {
    let res = []
    let data = {}
    for (let val of cur) data[val] = val
    for (let a of ary) if (data[a] && !res.includes(a)) res.push(a)
    return res;
  }

  return {
    intersection,
    isEqual,
    isMatch,
    pullAll,
    pull,
    compact,
    curry,
    spread,
    memoize,
    unary,
    ary,
    negate,
    flip,
    before,
    chunk,
    difference,
    drop,
    dropRight,
    fill,
    forEach,
    forEachRight,
    groupBy,
    dropRightWhile,
    differenceBy,
    differenceWith,
    dropWhile,
    findIndex,
    findLastIndex,
    matches,
    matchesProperty,
    property,
    get,
    has,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    uniq,
    join,
    last,
    lastIndexOf,
    nth,
    remove,
  }
}()
