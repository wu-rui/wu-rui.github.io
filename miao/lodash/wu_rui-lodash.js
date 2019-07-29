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

  return {
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
  }
}()

// var test = function () {
//   function negate(f) {
//     return function (...args) {
//       return !f(...args);
//     }
//   }
//   // 等同于
//   var negate = f => (...args) => !f(...args);

//   // lodash的flip函数
//   function flip(func) {
//     return function (...args) {
//       return func(...args.reverse())
//     }
//   }
//   console.gol = flip(console.log)
//   console.gol(123) == 321
//   /**
//    *
//    * 返回一个函数，在前n次被调用的时候调用的是原函数
//    * 当超过n次直接返回最后一次调用的结果
//    * @param {*} m
//    * @param {*} func
//    */

//   function before(n, func) {
//     var times = 0;
//     var lastRes = null;
//     return function (...args) {
//       times++;
//       if (times < n) {
//         return lastRes = func(...args)
//       } else {
//         return lastRes;
//       }
//     }
//   }



//   function f() {
//     return this.val;
//   }
//   obj = {
//     f: f,
//     val: '哈哈哈',
//   }
//   obj.f()
//   等同于
//   f.apply(obj)
//   a = f.appl
//   a.apply(f)
//   f.apply.apply(f, [obj])




//   ary = [1, 2, 3, 4]
//   ary.slice = function (start, end) {
//     let res = []
//     for (let i = start; i < end; i++) {
//       console.log(this)
//       res.push(this[i])
//     }
//     return res;
//   }
// }