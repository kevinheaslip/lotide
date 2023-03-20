const eqArrays = require('../eqArrays');

// returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // if the lengths of the key arrays don't match, return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) {
    // check to see if the values of the keys in each array are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if they are, call eqArrays to check for equality
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // if the values of the keys are primitives, compare them
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
