// var wu_rui = function () {

//   function compact(ary) {
//     return ary.filter(it => it)
//   }

//   function curry(f, n = 0) {
//     if (!f) return undefined;
//     n = f.length;
//     let ary = arguments[2] || [];
//     return function (...arg) {
//       ary.push(...arg)
//       if (ary.length < n) {
//         return curry(f, n, ary);
//       } else {
//         return f(...ary.slice(0, n))
//       }
//     }
//   }
//   function spread(func) {
//     return function (ary) {
//       return func.apply(null, ary)
//     }
//   }

//   function memoize(f) {
//     let cache = {}
//     return function (arg) {
//       if (arg in map) {
//         return cache[arg]
//       } else {
//         return cache[arg] = f(arg)
//       }
//     }
//   }

//   function ary(func, n = func.length) {
//     return function (...args) {
//       return func(...args.slice(0, n));
//     }
//   }


//   function unary(func, n = func.length) {
//     return ary(f, 1)
//   }

//   function negate(f) {
//     return function (...args) {
//       return !f(...args);
//     }
//   }

//   function flip(func) {
//     return function (...args) {
//       return func(...args.reverse())
//     }
//   }


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

//   return {
//     compact,
//     curry,
//     spread,
//     memoize,
//     unary,
//     ary,
//     negate,
//     flip,
//     before,
//   }
// }()


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

// }

// function f() {
//   return this.val;
// }
// obj = {
//   f: f,
//   val: '哈哈哈',
// }
// obj.f()
// 等同于
// f.apply(obj)
// a = f.appl
// a.apply(f)
// f.apply.apply(f, [obj])




// ary = [1, 2, 3, 4]
// ary.slice = function (start, end) {
//   let res = []
//   for (let i = start; i < end; i++) {
//     console.log(this)
//     res.push(this[i])
//   }
//   return res;
// }