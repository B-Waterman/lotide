//Determines if two parameters are equal in type and value
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Should return first element, or head, of an array
const head = function(array) {
  return array[0];
};

//Test Assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");