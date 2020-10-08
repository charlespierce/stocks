const { getPrices } = require('../api');

module.exports = {
    command: 'get <symbols..>',
    desc: 'Show price data for a list of stocks',
    builder: {},
    handler,
};

// TODO: Format output as a table with colors (shared with default)
// TODO: If count of prices is less than requested, show note about invalid symbols being omitted
async function handler(argv) {
    const prices = await getPrices(argv.symbols);

    console.info(prices);
}
