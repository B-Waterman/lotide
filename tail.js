const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.slice(1, array.length);
  return newArray;
};
//Should return all elements of an array except the first, AKA the tail

module.exports = tail;
