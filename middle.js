const middle = function(array) {
  let newArray = []
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    let elementOne = ((array.length / 2) - 1); 
    let elementTwo = ((array.length / 2));
    newArray.push(array[elementOne], array[elementTwo]);
    return newArray;
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;