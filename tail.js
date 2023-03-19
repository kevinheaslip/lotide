// returns every element of an array except the first element
const tail = function(arr) {
  arr = arr.slice(1);
  return arr;
};

module.exports = tail;