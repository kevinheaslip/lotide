// a function that searches an object for a value and returns the first key for that value
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
