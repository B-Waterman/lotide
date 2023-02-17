const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i = 0; i < object1.length; i++) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;