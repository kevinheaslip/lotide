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

// a function that accepts an array and returns the middle-most element(s)
const middle = function(arr) {
  let evenIndex = arr.length / 2;
  let oddIndex = Math.floor((arr.length / 2));
  if (arr.length <= 2) {
    // return an empty array if only 1-2 elements
    return [];
  } else if (arr.length % 2 === 0) {
    // for even number of elements return two middle elements
    return arr.slice((evenIndex - 1), (evenIndex + 1));
  } else if (arr.length % 2 !== 0) {
    // for odd number of elements return a single middle element
    return arr.slice(oddIndex, (oddIndex + 1));
  }
};

// test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
