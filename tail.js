// a function that returns every element of an array except the first element: the tail
const tail = function(arr) {
  arr = arr.slice(1);
  return arr;
};

module.exports = tail;