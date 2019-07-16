var wu_rui = {
  compact: function (ary) {
    return ary.filter(it => it)
  },
  curry: function (f, n = f.length) {
    let ary = [];
    return function (...arg) {
      ary.push(...arg)
      if (ary.length < n) {
        return f;
      } else {
        return f(...ary.slice(0, n))
      }
    }
  },

}
