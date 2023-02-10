const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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


const words = ["I\'m", "creating", "a", "beautiful", "pattern"]
//A wonderful collection of words courtesy of Knives Out

const map = function(array, callback) {
  //temp code
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//A minimal map function
const results1 = map(words, word => word[0]);
console.log(results1);