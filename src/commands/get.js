const { StocksError } = require('../error');

module.exports = {
    command: 'get <symbols..>',
    desc: 'Show price data for a list of stocks',
    builder: {},
    handler,
};

function handler(argv) {
    throw new StocksError('Fake Error', 'Re-run to see what happens');
    console.log('Running get', argv.symbols);
}
