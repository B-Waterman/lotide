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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " " && letter !== "'") {
      if (!results[letter]) { //If key doesn't exists for letter yet...
        results[letter] = [i]; //Push index value to key
      } else {
        results[letter].push(i); //Create key & assign first appearance index value
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("I'm creating a beautiful pattern").i, [0, 9, 20]); //Assertion Passed!
assertArraysEqual(letterPositions("Lighthouse in the house").i, [0]); //Assertion Failed!