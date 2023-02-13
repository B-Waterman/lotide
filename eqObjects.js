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
//Goal: function can assess both the length and the content of each object's array and return false if two different objects have the same properties, or same properties but different order, one more or less than the other - Anything besides a Perfect Match
// similar to eqArrays

//Test if both objects are arrays, if length of array is same, if the keys And their values match
const eqObjects = function(object1, object2) {
  if (object1.length !== object2.length) {
    return false
  }
  if (Object.keys(object1) !== Object.keys(object2)) {
    return false
  }
  
};

// Test Case:

const shirtObject = {colour: "red", size: "medium"};
const anotherCoolerShirtObject = {size: "medium", colour: "red"};
assertEqual(eqObjects(shirtObject, anotherCoolerShirtObject), true); //Should fail!

const longSleeveShirtObject = {size: "medium", colour: "red", sleaveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); //Should fail!