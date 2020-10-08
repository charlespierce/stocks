const { getFavorites } = require('../store');
const { getPrices } = require('../api');

module.exports = {
    command: '$0',
    desc: 'Show price data for your favorite stocks',
    builder: {},
    handler,
};

// TODO: Show message if no favorites are set, fetch FAANG instead
// TODO: Format output as a table with colors
async function handler() {
    const favorites = getFavorites();
    const prices = await getPrices(favorites);

    console.info(prices);
}
