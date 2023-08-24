const { describe } = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");
const { expect } = require("chai");

describe("Stubs", () => {
  it("displays correct message to the console", () => {
    const spy = sinon.spy(console, "log");
    const stub = sinon.stub(Utils, "calculateNumber").callsFake(() => 10);

    sendPaymentRequestToApi(200, 300);

    expect(spy.calledOnceWith("The total is: 10")).to.be.true;
    spy.restore();
    stub.restore();
  });
});
