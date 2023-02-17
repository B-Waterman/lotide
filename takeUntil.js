const eqArrays = function(arr1, arr2) {
  // takes two arrays, if equal = true, if not = false
  if (arr1.length !== arr2.length) {
    return false;
    // checks length first to rule out longer arrays with same starting values
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // if both are arrays, test if arrays are equal
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
      // if elements of arrays are not equal, return false
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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
const newArray1 = takeUntil(array1, i => i < 0);
console.log(newArray1); //Should be [1, 2, 3, 4]

const array2 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const newArray2 = takeUntil(array2, i => i < 0);
console.log(newArray2); //Should be [1, 2, 5, 7, 2]

module.exports = takeUntil;