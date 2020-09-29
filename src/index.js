
exports.min = function min(array) {
  if (!array || array.length <= 0) return 0;

  let min = (arr) => {
    return Math.min.apply(Math, arr);
  }

  return min(array);
}

exports.max = function max(array) {
  if (!array || array.length <= 0) return 0;

  let max = (arr) => {
    return Math.max.apply(Math, arr);
  }

  return max(array);
}

exports.avg = function avg(array) {
  if (!array || array.length <= 0) return 0;

  let avg = (arr) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  return avg(array);
}
