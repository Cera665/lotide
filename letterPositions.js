const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// console.log(assertArraysEqual(letterPositions("hello").e, [1])); //does this 1 refer to index?

module.exports = letterPositions;