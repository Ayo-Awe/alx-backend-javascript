const { expect } = require("chai");
const request = require("request");

describe("Basic integration tests", () => {
  describe("/login", () => {
    it("should return status 200", (done) => {
      request.post(
        {
          url: "http://localhost:7865/login",
          body: JSON.stringify({ userName: "bola" }),
          headers: { "Content-Type": "application/json" },
        },
        (err, res) => {
          expect(res.statusCode).to.equal(200);
          done();
        }
      );
    });

    it("should return correct response body", (done) => {
      request.post(
        {
          url: "http://localhost:7865/login",
          body: JSON.stringify({ userName: "bola" }),
          headers: { "Content-Type": "application/json" },
        },
        (err, res) => {
          expect(res.body).to.equal("Welcome bola");
          done();
        }
      );
    });
  });

  describe("/available_payments", () => {
    it("should return status 200", (done) => {
      request.get("http://localhost:7865/available_payments", (err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("should return correct body", (done) => {
      request.get("http://localhost:7865/available_payments", (err, res) => {
        expect(JSON.parse(res.body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });
});
