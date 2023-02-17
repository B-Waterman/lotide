//Testing assertObjectsEqual.js

const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: 1, b: 2}, { a: 1, b: 2}); //Pass!
assertObjectsEqual({ a: 1, b: 5}, { a: 1, b: 5}); //Pass!
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }); //Pass!
assertObjectsEqual({ a: "1", b: "5" }, { b: "1", a: "2", c: "5" }); //Fail!