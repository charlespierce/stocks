const { expect } = require("chai");
const { Sandbox } = require("./sandbox");

describe("default command", function () {
  it("should error without a token", async function () {
    const sandbox = new Sandbox("defaultWithoutToken");

    try {
      await sandbox.run([]);
    } catch (result) {
      const stderr = result.stderr.toString();
      expect(stderr).to.contain(
        "No IEX Cloud API token available to fetch stock data"
      );
      expect(stderr).to.contain(
        "Store your API token using `stocks login <token>`"
      );
      return;
    } finally {
      sandbox.cleanUp();
    }

    expect.fail("Didn't error without token");
  });
});
