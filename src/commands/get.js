const { getPrices } = require('../api');
const { createTable } = require('../table');
const { writeNote } = require('../style');

module.exports = {
    command: 'get <symbols..>',
    desc: 'Show price data for a list of stocks',
    builder,
    handler,
};

function builder(yargs) {
    return yargs.option('token', {
        alias: 't',
        type: 'string',
        description: 'IEX Cloud API Token to use to fetch data',
    }).option('url', {
        alias: 'u',
        type: 'string',
        description: 'Base URL to use for API requests',
    });
}

async function handler(argv) {
    const prices = await getPrices(argv.symbols, argv);

    console.info(createTable(prices));

    if (prices.length !== argv.symbols.length) {
        writeNote('Invalid stock symbols have been omitted');
    }
}
