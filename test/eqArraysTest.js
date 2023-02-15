//Testing eqArrays.js

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //Pass!
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //Fail!
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); //Pass!
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); //Fail!