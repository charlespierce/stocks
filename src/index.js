const yargs = require("yargs");
const { errorHandler, StocksError } = require("./error");
const { writeError } = require("./style");

try {
  // Define the top-level CLI settings for yargs, then parse and execute commands
  yargs
    .scriptName("stocks")
    .help("help", "Show this help and exit")
    .version("version", "Show version and exit")
    .strict()
    .wrap(Math.min(100, yargs.terminalWidth()))
    .fail(errorHandler)
    .commandDir("commands").argv;
} catch (err) {
  if (err instanceof StocksError) {
    writeError(err.toMessage());
    process.exit(1);
  } else {
    throw err;
  }
}
