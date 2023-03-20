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

module.exports = flatten;
