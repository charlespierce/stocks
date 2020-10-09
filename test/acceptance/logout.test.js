const { expect } = require("chai");
const { Sandbox } = require("./sandbox");

describe("logout command", function () {
  it("should clear the token", async function () {
    const sandbox = new Sandbox("logoutClearToken");
    sandbox.setConfigValue("token", "TOKEN1234");

    const result = await sandbox.run(["logout"]);

    expect(result.stdout.toString()).to.include("API token removed!");
    expect(sandbox.getConfigValue("token")).to.be.null;

    sandbox.cleanUp();
  });
});
