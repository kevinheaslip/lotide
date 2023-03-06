// a function that checks to see if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    // checks if both arrays are empty, and if so, returns true
    if (!arr1.length) {
      return true;
    } else {
      // checks to see if the elements in both arrays are the same
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }
};

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

// checks to see if two objects are equal
const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// test cases
assertObjectsEqual({ make: "Honda", model: "Civic", color: "red" }, { color: "red", make: "Honda", model: "Civic"});
assertObjectsEqual({ make: "Honda", model: "Civic", color: "red" }, { color: "blue", make: "Toyota", model: "Corolla"});