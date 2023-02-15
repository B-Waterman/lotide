//Testing assertArraysEqual.js

const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); //Pass!
assertArraysEqual([1, "fifteen", 30], [1, 15, 30]); //Fail!