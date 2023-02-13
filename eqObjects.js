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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//Goal: function can assess both the length and the content of each object's array and return false if two different objects have the same properties, or same properties but different order, one more or less than the other - Anything besides a Perfect Match
// similar to eqArrays

//Test if both objects are arrays, if length of array is same, if the keys And their values match
const eqObjects = function(object1, object2) {
  if (object1.length !== object2.length) {
    return false
  }
  if (Object.keys(object1) !== Object.keys(object2)) {
    return false
  } else {
    for (let i = 0; i < object1.length; i++) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (eqArrays(object1[i], object2[i]) === false) {

        }
      }
    }
  }

};

// Test Case:

const shirtObject = {colour: "red", size: "medium"};
const anotherCoolerShirtObject = {size: "medium", colour: "red"};
assertEqual(eqObjects(shirtObject, anotherCoolerShirtObject), true); //Should fail!

const longSleeveShirtObject = {size: "medium", colour: "red", sleaveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); //Should fail!