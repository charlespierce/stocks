exports.command = 'remove <symbols..>';
exports.desc = 'Remove stocks from your list of favorites';
exports.builder = {};
exports.handler = function (argv) {
    console.log('Running favorite remove', argv.symbols);
};
