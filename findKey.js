const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};


const findKey = function(obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

console.log(assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma"));