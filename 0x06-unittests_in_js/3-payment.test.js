const { describe } = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("Spies", () => {
  it("should be called with right arguments", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(200, 300);
    expect(spy.calledOnceWith("SUM", 200, 300)).to.be.true;
    spy.restore();
  });
  it("should be called with right arguments", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith("SUM", 100, 20)).to.be.true;
    spy.restore();
  });
});
