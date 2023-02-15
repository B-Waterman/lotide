//Testing tail.js

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("Original array still has 3 elements, array unaltered", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  }); //Pass!

  it("Array of 1 element yields en empty array", () => {
    const lonelyNumber = [1];
    assert.deepEqual(tail(lonelyNumber), []);
  }); //Pass!

  it("An empty array will yield an empty array", () => {
    const barrenArray = [];
    assert.deepEqual(barrenArray, []);
  }); //Pass!
});