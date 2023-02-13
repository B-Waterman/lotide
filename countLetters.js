const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let letterTally = {};
  let testingString = string.toLowerCase();
  for (let letter of testingString) {
    if (letter !== " " && letter !== "'") {
      if (letterTally[letter]) { //If string contains a given letter...
        letterTally[letter] += 1; //Add one to existing key's value, OR
      } else {
        letterTally[letter] = 1; //Create key & assign starting value (tally) of 1
      }
    }
  }
  return letterTally;
};