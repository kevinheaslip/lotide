// a function that checks to see if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    // checks if both arrays are empty, and if so, returns true
    if (arr1.length === 0) {
      return true;
    } else {
      // checks to see if the elements in both arrays are the same
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};

// a function that logs to the console whether or not two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// a function that will return a subset of a given array without unwanted elements
const without = function(source, itemsToRemove) {
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};

// test to see if original array is modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// I need more test cases for without