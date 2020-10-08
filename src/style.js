const chalk = require("chalk");

module.exports = {
  writeNote,
  writeError,
};

/**
 * Write a note to the console
 *
 * @param {string} msg Note text
 */
function writeNote(msg) {
  console.info(`${chalk.cyan("node:")} ${msg}`);
}

/**
 * Display an error to the console
 *
 * @param {string} msg Error message
 */
function writeError(msg) {
  console.error(`${chalk.red.bold("error:")} ${msg}`);
}
