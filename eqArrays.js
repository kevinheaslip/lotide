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

module.exports = eqArrays;
