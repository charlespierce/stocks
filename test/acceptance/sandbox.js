const execa = require("execa");
const path = require("path");
const fs = require("fs");
const Configstore = require("configstore");

const binPath = path.join(__dirname, "../../bin/stocks.js");

/**
 * Sandbox that handles setting up and tearing down a custom config environment
 */
class Sandbox {
  /**
   * Create a new Sandbox for a test
   *
   * @param {string} testname Name of the test being run. Should be unique to prevent collisions
   */
  constructor(testname) {
    this.storeName = `stocks-test-${testname}`;
    this.testStore = new Configstore(this.storeName);

    // Ensure the config is empty when a new test starts
    this.cleanUp();
  }

  /**
   * Execute `stocks` with the provided arguments
   *
   * @param {string[]} args Arguments to pass to `stocks`
   */
  run(args) {
    const env = Object.assign({}, process.env, {
      _STOCKS_TEST_CONFIG: this.storeName,
    });

    return execa(binPath, args, {
      env,
    });
  }

  /**
   * Set a value in the test config store
   *
   * @param {string} key The key to set in the config store
   * @param {*} value The value to set in the config store
   */
  setConfigValue(key, value) {
    this.testStore.set(key, value);
  }

  /**
   * Retrieve a value from the test config store
   *
   * @param {string} key The key to fetch from the config environment
   */
  getConfigValue(key) {
    return this.testStore.get(key);
  }

  /**
   * Clean up the config environment, ensuring that the config file is removed
   */
  cleanUp() {
    const configPath = this.testStore.path;
    try {
      fs.unlinkSync(configPath);
    } catch (err) {
      // If the failure was because the file didn't exist, that's okay
      // Otherwise we propagate the error
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
  }
}

module.exports = {
  Sandbox,
};
