const { getFavorites } = require('../store');
const { getPrices } = require('../api');
const chalk = require('chalk');

module.exports = {
    command: '$0',
    desc: 'Show price data for your favorite stocks',
    builder: {},
    handler,
};

const FAANG_SYMBOLS = ['FB', 'AAPL', 'AMZN', 'NFLX', 'GOOG'];

// TODO: Format output as a table with colors
async function handler() {
    let favorites = getFavorites();

    if (!favorites.length) {
        console.info(`${chalk.cyan('note:')} No favorite stocks set, showing popular stocks instead`);
        favorites = FAANG_SYMBOLS;
    }

    const prices = await getPrices(favorites);

    console.info(prices);
}
