const { describe } = require("mocha");
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("async", () => {
  it("should return payload when success is true", (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: "Successful response from the API" });
      done();
    });
  });
});
