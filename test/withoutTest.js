//Testing without.js

const without = require('../without');

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(['1', 2, 'Thirteen'], ['1', 'Thirteen'])); // => [2]
console.log(without([], [])); // => []
console.log(without(["where\'s", "the", "bug?"], ["where\'s", "the", "bug?"])); // => [] aka Gone!

//Test: original array is unaltered
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);