const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};
//Determines if two parameters are equal in type and value

const head = function(array) {
  return array[0];
};
//Should return first element, or head, of an array

//Test Assertions
assertEqual(head([5,6,7]), 5); //Pass!
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Pass!
assertEqual(head([1]), 1); //Pass!
assertEqual(head([]), 15); //Undefined