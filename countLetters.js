const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

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
console.log(countLetters("weeeeee"));