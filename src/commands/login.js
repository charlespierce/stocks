const { setToken } = require('../store');

module.exports = {
    command: 'login <token>',
    desc: 'Login with your IEX Cloud API Token',
    builder: {},
    handler,
};

/**
 * Handler for the `login` command
 * 
 * Stores the provided token in the local store, to use in future API calls
 * 
 * @param argv Parsed command-line arguments, provided by yargs
 */
function handler(argv) {
    setToken(argv.token);

    console.info('API token saved!');
}
