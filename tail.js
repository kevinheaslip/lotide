// checks if two inputs are equivalent
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// a function that returns every element of an array except the first element: the tail
const tail = function(arr) {
  arr = arr.slice(1);
  return arr;
};

// function should not modify array, should return a new array, so a method that creates a new modified copy of the original, does not alter the original

// test case: check if the original array is unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// test case: an array with one element should yield an empty array for its tail
const animals = ["cat"];
assertEqual(tail(animals).length, 0);

// test case: an empty array should yield an empty array for its tail
const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);