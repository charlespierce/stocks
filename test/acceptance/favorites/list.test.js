const { expect } = require("chai");
const { Sandbox } = require("../sandbox");

describe("favorites list command", function () {
  it("should show favorite stocks", async function () {
    const sandbox = new Sandbox("listFavorites");
    sandbox.setConfigValue("favorites", ["AAPL", "AMZN", "MSFT"]);

    const result = await sandbox.run(["favorites", "list"]);

    expect(result.stdout.toString()).to.contain(
      "Your favorite stocks: AAPL, AMZN, MSFT"
    );

    sandbox.cleanUp();
  });

  it("should show a user-friendly message when there are no favorites", async function () {
    const sandbox = new Sandbox("listFavoritesEmpty");

    const result = await sandbox.run(["favorites", "list"]);
    const stdout = result.stdout.toString();

    expect(stdout).to.contain("You don't have any favorite stocks!");
    expect(stdout).to.contain(
      "Add some stocks to your favorites with `stocks favorites add <symbols..>`"
    );
  });
});
