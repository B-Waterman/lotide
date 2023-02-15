//Testing head.js

const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); //Pass!
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Pass!
assertEqual(head([1]), 1); //Pass!
assertEqual(head([]), 15); //Undefined, Fail!