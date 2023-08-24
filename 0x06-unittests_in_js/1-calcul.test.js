var assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM", () => {
    it("should return correct sum when but numbers are integers", function () {
      const sum = calculateNumber("SUM", 9, 9);
      assert.equal(sum, 18);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("SUM", 2.62, 9);
      assert.equal(sum, 12);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("SUM", 2.32, 9);
      assert.equal(sum, 11);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("SUM", -5.8, -2.2);
      assert.equal(sum, -8);
    });
  });
  describe("SUBTRACT", () => {
    it("should return correct value when but numbers are integers", function () {
      const sum = calculateNumber("SUBTRACT", 9, 9);
      assert.equal(sum, 0);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("SUBTRACT", 2.62, 9);
      assert.equal(sum, -6);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("SUBTRACT", 0.002, -4);
      assert.equal(sum, 4);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("SUBTRACT", -5, -2);
      assert.equal(sum, -3);
    });
  });
  describe("DIVIDE", () => {
    it("should return correct value when but numbers are integers", function () {
      const sum = calculateNumber("DIVIDE", 9, 9);
      assert.equal(sum, 1);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("DIVIDE", 2.62, 9);
      assert.equal(sum, 1 / 3);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("DIVIDE", 0.002, -4);
      assert.equal(sum, 0);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("DIVIDE", -5.6, -2);
      assert.equal(sum, 3);
    });
    it("should return error sum when round of b is 0", function () {
      const sum = calculateNumber("DIVIDE", -5.6, -0.003);
      assert.equal(sum, "Error");
    });
  });
});
