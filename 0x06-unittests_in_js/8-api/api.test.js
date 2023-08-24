const { expect } = require("chai");
const request = require("request");

describe("Basic integration tests", () => {
  it("should return status 200", (done) => {
    request.get("http://localhost:7865", (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("should return correct response body", (done) => {
    request.get("http://localhost:7865", (err, res) => {
      expect(res.body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
