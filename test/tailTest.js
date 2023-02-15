//Testing tail.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test Case 1: Check original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case 2: Array with 1 element
const lonelyNumber = [1];
console.log(tail(lonelyNumber)); //Should yield an empty array as its tail; it does!

//Test Case 3: Empty array
const barrenArray = [];
console.log(tail(barrenArray)); //Should yield an empty array as its tail; it does!