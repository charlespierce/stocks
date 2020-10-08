module.exports = {
    command: 'login <token>',
    desc: 'Login with your IEX Cloud API Token',
    builder: {},
    handler,
};

function handler(argv) {
    console.log('Running login', argv.token);
}
