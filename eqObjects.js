const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  let objOne = Object.keys(object1);
  let objTwo = Object.keys(object2);

  if (objOne.length !== objTwo.length) {
    return false;
  } else {
    for (let i of object1) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};