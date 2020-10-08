exports.command = 'get <symbols..>';
exports.desc = 'Show price data for a list of stocks';
exports.builder = {};
exports.handler = function (argv) {
    console.log('Running get', argv.symbols);
};
