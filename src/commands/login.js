const { setToken } = require('../store');

module.exports = {
    command: 'login <token>',
    desc: 'Login with your IEX Cloud API Token',
    builder: {},
    handler,
};

function handler(argv) {
    setToken(argv.token);

    console.info('API token saved!');
}
