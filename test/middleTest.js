const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns middle element of an array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns two middle elements if the arrays is even-numbered", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});