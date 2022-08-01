const findKeyByValue = function(object, givenValue) {
  for (let value of Object.keys(object)) {
    if (givenValue === object[value]) {
      return value;
    }
  }

};

/*
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
*/

module.exports = findKeyByValue;