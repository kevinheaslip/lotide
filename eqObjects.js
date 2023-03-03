// checks if two inputs are equivalent
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // if the lengths of the key arrays don't match, return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  // check to see if the values of the keys in each array are arrays
  } else {
    for (const key of object1Keys) {
      if (Array.isArray(object1Keys[key]) && Array.isArray(object2Keys[key])) {
        // if they are, call eqArrays to check for equality
        return eqArrays(object1Keys, object2Keys);
      } else {
        // if the values of the keys are primitives, compare them
        if (object1Keys[key] !== object2Keys[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

// test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);