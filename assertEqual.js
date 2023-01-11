// Function Implementation

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
  //Template literals pass the assertion's actual values into the final string!
};

//Test Code below
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Hello World', 'Hello World');
assertEqual('cherry', 10);
/*
assertEqual(👍, 👌)
assertEqual(❤️, ❤️)
*/
//Sadly, emojis are not a Number, String, or Boolean and cannot pass, but worth trying.