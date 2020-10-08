const { writeError } = require("./style");

/**
 * Custom error type that incorporates both a message and an optional call-to-action
 */
class StocksError {
  /**
   * @param {string} message Error message to describe the problem
   * @param {string} cta Call-to-action to help guide the user on how to fix the issue
   */
  constructor(message, cta) {
    this.message = message;
    this.cta = cta;
  }

  /**
   * Format the error message and call-to-action for display
   */
  toMessage() {
    let message = this.message;

    if (this.cta) {
      message += `\n\n${this.cta}`;
    }

    return message;
  }
}

/**
 * Handler for errors in yargs processing.
 *
 * Designed to be passed to `yargs.fail`
 *
 * @param {string?} msg The yargs-generated error message
 * @param {object} err The underlying error object that caused a failure
 */
function errorHandler(msg, err) {
  if (err instanceof StocksError) {
    writeError(err.toMessage());
  } else if (msg) {
    // Yargs errors are failures in parsing, provide a call-to-action to use the `--help` flag
    // for more information
    writeError(`${msg}\n\nPass --help to show usage information`);
  } else {
    console.error(err.toString());
  }

  process.exit(1);
}

module.exports = {
  errorHandler,
  StocksError,
};
