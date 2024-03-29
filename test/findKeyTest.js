//Testing findKey.js

const assertArraysEqual = require('../assertArraysEqual');
const findKey = require('../findKey');

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, i => i.stars === 2), "noma"); // => Pass!