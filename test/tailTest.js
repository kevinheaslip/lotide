const assertEqual = require('../assertEqual');
const tail = require('../tail');

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