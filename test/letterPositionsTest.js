//Testing letterPositions.js

const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("I'm creating a beautiful pattern").i, [0, 9, 20]); //Assertion Passed!
assertArraysEqual(letterPositions("Lighthouse in the house").i, [0]); //Assertion Failed!