//Testing countOnly.js

const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); //Pass!
assertEqual(result1["Karima"], undefined); //Pass!
assertEqual(result1["Fang"], 2); //Pass!
assertEqual(result1["Agouhanna"], undefined); //Pass!