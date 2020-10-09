const { getFavorites } = require("../../store");

module.exports = {
  command: "list",
  desc: "Show the list of your favorite stocks",
  builder: {},
  handler,
};

/**
 * Handler for the `favorites list` command
 *
 * Fetches the user's favorite stocks from the local store and displays them
 */
function handler() {
  const favoriteList = getFavorites();
  if (favoriteList.length) {
    console.info(`Your favorite stocks: ${favoriteList.join(", ")}`);
  } else {
    console.info(`You don't have any favorite stocks!

Add some stocks to your favorites with \`stocks favorites add <symbols..>\``);
  }
}
