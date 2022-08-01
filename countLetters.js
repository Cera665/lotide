const countLetters = function(str) {
  const result = [];
  for (let char of str) {
    if (!result[char])
      result[char] = 1;
    else
      result[char]++;
  }
  return result;
  
};
// console.log(countLetters("weeeeee"));

module.exports = countLetters;