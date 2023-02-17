//Testing findKeyByValue.js

const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  anthology: "Love, Death & Robots",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Last Of Us"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Last Of Us"), "drama"); //Pass!
assertEqual(findKeyByValue(bestTVShowsByGenre, "Love, Death & Robots"), undefined); //Fail!