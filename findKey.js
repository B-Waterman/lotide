const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const findKey = function(object, value) {
  for (let key of Object.keys(object)) {
    if ((object[key] === value)) {
      return key;
    }
  }
};

// Test Cases:
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, i => i.stars === 2) // => "noma"


assertArraysEqual(findKey, "noma");

module.exports = findKey;