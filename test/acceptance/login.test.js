const { expect } = require("chai");
const { Sandbox } = require("./sandbox");

describe("login command", function () {
  it("should store the token", async function () {
    const sandbox = new Sandbox("loginStoreToken");
    const result = await sandbox.run(["login", "TOKEN1234"]);

    expect(result.stdout.toString()).to.include("API token saved!");
    expect(sandbox.getConfigValue("token")).to.equal("TOKEN1234");

    sandbox.cleanUp();
  });
});
