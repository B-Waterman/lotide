//Determines if two parameters are equal in type and value
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Should return all elements of an array except the first, AKA the tail
const tail = function(array) {
  return array.slice(1);
};
