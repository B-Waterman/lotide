//Testing head.js

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  }); //Pass!

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  }); //Pass!

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  }); //Pass!

  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  }); //Pass!
});