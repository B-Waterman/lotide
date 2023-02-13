//Returns a slice of the array w/elements taken from the beginning
//Continues until callback returns truthy value
//what creates a truthy value? Do i need that goal or just the framework like map.js?
//So we know we're working with booleans and likely .slice() or .splice()


const takeUntil = function(array, callback) {
  let slicedArray = [];
  for (let i of array) {
    if (callback(array[i])) {
      slicedArray = array.slice(0, i)
      return slicedArray;
    }
  }
  return slicedArray;
};

// Test Case:
const array1 = [1, 2, 3, 4, -5, 60, -700, 8200]
const newArray = takeUntil(array1, i => i < 0);
console.log(newArray); //expected log: [1, 2, 3, 4]