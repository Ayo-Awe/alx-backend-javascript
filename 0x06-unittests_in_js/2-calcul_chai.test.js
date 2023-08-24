const calculateNumber = require("./1-calcul");
const { expect } = require("chai");

describe("calculateNumber", function () {
  describe("SUM", () => {
    it("should return correct sum when but numbers are integers", function () {
      const sum = calculateNumber("SUM", 9, 9);
      expect(sum).eq(18);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("SUM", 2.62, 9);
      expect(sum).eq(12);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("SUM", 2.32, 9);
      expect(sum).eq(11);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("SUM", -5.8, -2.2);
      expect(sum).eq(-8);
    });
  });
  describe("SUBTRACT", () => {
    it("should return correct value when but numbers are integers", function () {
      const sum = calculateNumber("SUBTRACT", 9, 9);
      expect(sum).eq(0);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("SUBTRACT", 2.62, 9);
      expect(sum).eq(-6);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("SUBTRACT", 0.002, -4);
      expect(sum).eq(4);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("SUBTRACT", -5, -2);
      expect(sum).eq(-3);
    });
  });
  describe("DIVIDE", () => {
    it("should return correct value when but numbers are integers", function () {
      const sum = calculateNumber("DIVIDE", 9, 9);
      expect(sum).eq(1);
    });
    it("should return correct sum when one number should be rounded up", function () {
      const sum = calculateNumber("DIVIDE", 2.62, 9);
      expect(sum).eq(1 / 3);
    });
    it("should return correct sum when one number should be rounded down", function () {
      const sum = calculateNumber("DIVIDE", 0.002, -4);
      expect(sum).eq(0);
    });
    it("should return correct sum when numbers are negative", function () {
      const sum = calculateNumber("DIVIDE", -5.6, -2);
      expect(sum).eq(3);
    });
    it("should return error sum when round of b is 0", function () {
      const sum = calculateNumber("DIVIDE", -5.6, -0.003);
      expect(sum).eq("Error");
    });
  });
});
