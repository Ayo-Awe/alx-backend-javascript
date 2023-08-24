const { expect } = require("chai");
const request = require("request");

describe("Basic integration tests", () => {
  it("should return status 200 when id is a number", (done) => {
    request.get("http://localhost:7865/cart/3", (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("should return status 404 when id is not a number", (done) => {
    request.get("http://localhost:7865/cart/3boexes", (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
  it("should return correct response body", (done) => {
    request.get("http://localhost:7865/cart/6", (err, res) => {
      expect(res.body).to.equal("Payment methods for cart 6");
      done();
    });
  });
});
