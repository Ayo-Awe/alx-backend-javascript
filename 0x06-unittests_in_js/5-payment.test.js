const { describe } = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");
const { expect } = require("chai");

describe("hooks", () => {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(console, "log");
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("should display correct message when called with 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnceWith("The total is: 120")).to.be.true;
  });

  it("should display correct message when called with 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnceWith("The total is: 20")).to.be.true;
  });
});
