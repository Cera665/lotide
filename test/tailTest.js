const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns the array less the first element", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
});