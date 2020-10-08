const { removeToken } = require("../store");

module.exports = {
  command: "logout",
  desc: "Logout and forget your IEX Cloud API Token",
  builder: {},
  handler,
};

/**
 * Handler for the `logout` command
 *
 * Removes the stored API token from the local store, so it cannot be used any more
 *
 * @param argv Parsed command-line arguments, provided by yargs
 */
function handler() {
  removeToken();

  console.info("API token removed!");
}
