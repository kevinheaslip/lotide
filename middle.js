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

module.exports = middle;