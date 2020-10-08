const { getPrices } = require("../api");
const { createTable } = require("../table");
const { writeNote } = require("../style");

module.exports = {
  command: "get <symbols..>",
  desc: "Show price data for a list of stocks",
  builder,
  handler,
};

/**
 * Builder for the `get` command
 *
 * Defines specific options for this command (--url and --token)
 *
 * @param yargs The yargs object that we can use to define options
 */
function builder(yargs) {
  return yargs
    .option("token", {
      alias: "t",
      type: "string",
      description: "IEX Cloud API Token to use to fetch data",
    })
    .option("url", {
      alias: "u",
      type: "string",
      description: "Base URL to use for API requests",
    });
}

/**
 * Handler for the `get` command
 *
 * Fetches price information about the requested stocks
 *
 * @param argv Parsed command-line arguments, provided by yargs
 */
async function handler(argv) {
  const prices = await getPrices(argv.symbols, argv);

  console.info(createTable(prices));

  // The IEX API omits any invalid stock symbols from the response. If the response has fewer
  // entries than requested, alert the user that invalid symbols were removed
  if (prices.length !== argv.symbols.length) {
    writeNote("Invalid stock symbols have been omitted");
  }
}
