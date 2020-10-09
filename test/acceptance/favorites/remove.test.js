const { expect } = require("chai");
const { Sandbox } = require("../sandbox");

describe("favorites remove command", function () {
  it("should remove stocks to the favorites list", async function () {
    const sandbox = new Sandbox("removeFavorites");
    sandbox.setConfigValue("favorites", ["AAPL", "AMZN", "MSFT", "TSLA"]);

    const result = await sandbox.run(["favorites", "remove", "AAPL", "MSFT"]);

    expect(result.stdout.toString()).to.contain(
      "Your favorite stocks: AMZN, TSLA"
    );
    expect(sandbox.getConfigValue("favorites")).to.include.members([
      "AMZN",
      "TSLA",
    ]);
  });

  it("should not be case-sensitive", async function () {
    const sandbox = new Sandbox("removeFavorites");
    sandbox.setConfigValue("favorites", ["AAPL", "AMZN", "MSFT", "TSLA"]);

    const result = await sandbox.run(["favorites", "remove", "aApL", "msft"]);

    expect(result.stdout.toString()).to.contain(
      "Your favorite stocks: AMZN, TSLA"
    );
    expect(sandbox.getConfigValue("favorites")).to.include.members([
      "AMZN",
      "TSLA",
    ]);
  });
});
