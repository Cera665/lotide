const without = (source, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    for  (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        result.push(source.slice(i, 1));
      }
    }
  }
  return result;
};

/*
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const without2 = (source, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    for  (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        result.push(source[i]);
      }
    }
  }
  return result;
};
*/

module.exports = without;