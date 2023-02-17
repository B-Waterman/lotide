//Testing takeUntil.js

const takeUntil = require('../takeUntil');

const array1 = [1, 2, 3, 4, -5, 60, -700, 8200];
const newArray1 = takeUntil(array1, i => i < 0);
console.log(newArray1); //Should be [1, 2, 3, 4]

const array2 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const newArray2 = takeUntil(array2, i => i < 0);
console.log(newArray2); //Should be [1, 2, 5, 7, 2]