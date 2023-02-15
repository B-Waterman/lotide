//Testing middle.js

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("Returns middle element of array with uneven number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  }); //Pass!
  
  it("Returns [] for an array with 1 element", () => {
    assert.deepEqual(middle([2]), []);
  }); //Pass!

  it("Returns middle 2 elements for array with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  }); //Pass!
});


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //Pass!
// assertArraysEqual(middle([2]), []); //Pass, return empty!
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //Pass!