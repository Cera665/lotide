
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: "${obj1}" === "${obj2}"`);
    console.log(`Example label: ${inspect(obj1)}`);
  }

  console.log(`🛑🛑🛑 Assertion Failed: "${obj1}" !== "${obj2}"`);

};
// console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));

module.exports = assertObjectsEqual;