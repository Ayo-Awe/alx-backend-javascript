const { expect } = require("chai");
const request = require("request");

describe("Basic integration tests", () => {
  describe("/", () => {
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

  describe("/cart/:id", () => {
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
