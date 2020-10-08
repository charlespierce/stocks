exports.command = 'login <token>';
exports.desc = 'Login with your IEX Cloud API Token';
exports.builder = {};
exports.handler = function (argv) {
    console.log('Running login', argv.token);
};
