// checks if two inputs are equivalent
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// test cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("cat", "cat");
assertEqual("cat", "dog");
assertEqual(42, 42);
assertEqual(42, 3);