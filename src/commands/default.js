const { getFavorites } = require('../store');
const { getPrices } = require('../api');
const { createTable } = require('../table');
const { writeNote } = require('../style');

module.exports = {
    command: '$0',
    desc: 'Show price data for your favorite stocks',
    builder: {},
    handler,
};

const FAANG_SYMBOLS = ['FB', 'AAPL', 'AMZN', 'NFLX', 'GOOG'];

async function handler() {
    let favorites = getFavorites();

    if (!favorites.length) {
        writeNote('No favorite stocks set, showing popular stocks instead');
        favorites = FAANG_SYMBOLS;
    }

    const prices = await getPrices(favorites);

    console.info(createTable(prices));

    if (prices.length !== favorites.length) {
        writeNote('Invalid stock symbols have been omitted');
    }
}
