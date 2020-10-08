const { getPrices } = require('../api');
const { createTable } = require('../table');
const { writeNote } = require('../style');

module.exports = {
    command: 'get <symbols..>',
    desc: 'Show price data for a list of stocks',
    builder: {},
    handler,
};

async function handler(argv) {
    const prices = await getPrices(argv.symbols);

    console.info(createTable(prices));

    if (prices.length !== argv.symbols.length) {
        writeNote('Invalid stock symbols have been omitted');
    }
}
