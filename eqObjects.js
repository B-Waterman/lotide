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
const eqObjects = function(object1, object2) {

};

// Test Case:

const shirtObject = {colour: "red", size: "medium"};
const anotherCoolerShirtObject = {size: "medium", colour: "red"};
assertEqual(eqObjects(shirtObject, anotherCoolerShirtObject), true); //Should fail!

const longSleeveShirtObject = {size: "medium", colour: "red", sleaveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); //Should fail!