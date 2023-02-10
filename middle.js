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

//Scenario 1: total # of elements in array odd #, return middle element
//Scenario 2: total # of elements in array even #, return two middle elements
//Scenario 3: array with only one or two elements total, return empty array
const middle = function(array) {
  let newArray = []
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    let elementOne = ((array.length / 2) - 1); 
    let elementTwo = ((array.length / 2));
    newArray.push(array[elementOne], array[elementTwo]);
    return newArray;
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

//Test Cases:
console.log(middle([6,2,3,4,9,6,1,0,5])); // => [9]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]