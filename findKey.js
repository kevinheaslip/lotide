// checks if two inputs are equivalent
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// scans an object and returns the first key for which a callback returns a truthy value
const findKey = function (object, callback) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// test cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  dog1: "Sam",
  dog2: "Max",
  dog3: "Walter"
}, x => x === "Walter"), "dog3");