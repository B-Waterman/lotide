const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Take in a string and tally the frequency of each letter's appearance. Spaces not included.
//If looping through string, spaces will be generated as a key unless excluded, write out exclusion, should use == expression
//for of loop
//iterate through string, for every repeat letter add 1 to the total logged under the corresponding letter's key
const countLetters = function(string) {
  let letterTally = {};

  for (let letter of string) {
    if (letterTally[letter]) {
      letterTally[letter] += 1;
    } else {
      letterTally[letter] = 1;
    }
  }
  return letterTally;
};

//Test Case:
console.log(countLetters("I\'m creating a beautiful pattern"));
console.log("I\'m creating a beautiful pattern");