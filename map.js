const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
/*

const words = ["one", "two", "potato", "pohtahto", "five"];
const firstLetter = map(words, word => word[0]);

console.log(assertArraysEqual(["o", "t", "p", "p", "f"], firstLetter));
*/

module.exports = map;