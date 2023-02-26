// a function that compares if two input arrays are equal
const eqArrays = function(arr1, arr2) {
  let eqElements = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        eqElements = true;
      } else {
        eqElements = false;
      }
    }
  }
  return eqElements;
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