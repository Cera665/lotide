const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: "${array1}" === "${array2}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${array1}" !== "${array2}"`);
  }
};

const words = ["one", "two", "potato", "pohtahto", "five"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const firstLetter = map(words, word => word[0]);


console.log(assertArraysEqual(["o", "t", "p", "p", "f"], firstLetter));