//Returns a slice of the array w/elements taken from the beginning
//Continues until callback returns truthy value
//what creates a truthy value? Do i need that goal or just the framework like map.js?
//So we know we're working with booleans and likely .slice() or .splice()

//Test Input
array1 = [1, 2, 3, 4, 5, 60, 700, 8200]

const takeUntil = function(array, callback) {
  let slicedArray = [];
  for (let item of array) {
    if (callback(item) !== true) {
    }
    console.log(callback)
  }
  return slicedArray;
};

// Test Case:
const newArray = takeUntil(array1, x => x < 0);
console.log(newArray);