var wu_rui = {
  compact: function (ary) {
    return ary.filter(it => it)
  },
  curry: function curry(f, n = 0) {
    if (!f) return undefined;
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
  },
}
