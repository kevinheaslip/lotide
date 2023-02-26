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

// a function that accepts an array containing a nested array of elements and returns a flattened array
const flatten = function(arr) {
  const flatArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flatArr.push(nestedElement);
      }
    } else {
      flatArr.push(element);
    }
  }
  return flatArr;
};

// test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([15, 1, [], [42], 12]), [15, 1, 42, 12]);
assertArraysEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);