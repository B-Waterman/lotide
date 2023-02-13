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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  //Template literals pass the assertion's actual values into the final string!
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//Goal: function can assess both the length and the content of each object's array, return false if object has one more or less key than the other - Anything besides a Perfect Match
// similar to eqArrays

//Test if both objects are arrays, if length of array is same, if the keys And their values match
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i = 0; i < object1.length; i++) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }

};

// Test Case:

const shirtObject = {colour: "red", size: "medium"};
const anotherCoolerShirtObject = {size: "medium", colour: "red"};
assertEqual(eqObjects(shirtObject, anotherCoolerShirtObject), true);

const longSleeveShirtObject = {size: "medium", colour: "red", sleaveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);