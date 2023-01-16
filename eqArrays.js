const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  //Template literals pass the assertion's actual values into the final string!
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => Assertion Passed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => Assertion Passed

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => Assertion Failed
assertEqual(eqArrays(["1", "2", "3", "3"], ["1", "2", "3"]), true); // => Assertion Failed
