const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;