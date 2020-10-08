const { expect } = require("chai");
const { StocksError } = require("../../src/error");

describe("StocksError", function () {
  describe("#toMessage()", function () {
    it("should include the error message", function () {
      const error = new StocksError("hello world");
      expect(error.toMessage()).to.contain("hello world");
    });

    it("should include the call-to-action if available", function () {
      const error = new StocksError("hello", "this is a cta");
      expect(error.toMessage()).to.contain("this is a cta");
    });

    it("should format the error message and call-to-action correctly", function () {
      const error = new StocksError("Task failed", "Please try again");
      expect(error.toMessage()).to.equal("Task failed\n\nPlease try again");
    });
  });
});
