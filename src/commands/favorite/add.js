exports.command = 'add <symbols..>';
exports.desc = 'Add stocks to your list of favorites';
exports.builder = {};
exports.handler = function (argv) {
    console.log('Running favorite add', argv.symbols);
};
