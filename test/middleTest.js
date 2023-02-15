//Testing middle.js

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //Pass!
assertArraysEqual(middle([2]), []); //Pass, return empty!
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //Pass!