const { getPrices } = require('../api');
const { createTable } = require('../table');

module.exports = {
    command: 'get <symbols..>',
    desc: 'Show price data for a list of stocks',
    builder: {},
    handler,
};

// TODO: If count of prices is less than requested, show note about invalid symbols being omitted
async function handler(argv) {
    const prices = await getPrices(argv.symbols);

    console.info(createTable(prices));
}
