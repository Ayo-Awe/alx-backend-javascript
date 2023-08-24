const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return correct sum when but numbers are integers", function () {
    const sum = calculateNumber(9, 9);
    assert.equal(sum, 18);
  });
  it("should return correct sum when one number should be rounded up", function () {
    const sum = calculateNumber(2.62, 9);
    assert.equal(sum, 12);
  });
  it("should return correct sum when one number should be rounded down", function () {
    const sum = calculateNumber(2.32, 9);
    assert.equal(sum, 11);
  });
  it("should return correct sum when numbers are negative", function () {
    const sum = calculateNumber(-5.8, -2.2);
    assert.equal(sum, -8);
  });
});
