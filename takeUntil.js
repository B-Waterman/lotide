const takeUntil = function(array, callback) {
  let slicedArray = [];
  for (let i of array) {
    if (callback(array[i])) {
      slicedArray = array.slice(0, i);
      return slicedArray;
    }
  }
  return slicedArray;
};

module.exports = takeUntil;