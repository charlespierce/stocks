const { removeToken } = require('../store');

module.exports = {
    command: 'logout',
    desc: 'Logout and forget your IEX Cloud API Token',
    builder: {},
    handler,
};

function handler() {
    removeToken();

    console.info('API token removed!');
}
