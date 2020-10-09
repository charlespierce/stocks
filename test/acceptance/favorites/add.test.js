const { expect } = require("chai");
const { Sandbox } = require("../sandbox");

describe("favorites add command", function () {
  it("should add stocks to the favorites list", async function () {
    const sandbox = new Sandbox("addFavorites");

    const result = await sandbox.run(["favorites", "add", "aapl", "msft"]);

    expect(result.stdout.toString()).to.contain(
      "Your favorite stocks: AAPL, MSFT"
    );
    expect(sandbox.getConfigValue("favorites")).to.include.members([
      "AAPL",
      "MSFT",
    ]);
  });
});
