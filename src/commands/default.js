const { getFavorites } = require('../store');
const { getPrices } = require('../api');
const { createTable } = require('../table');
const { writeNote } = require('../style');

// Using the command name `$0` here means this is the default command, run when no arguments are
// passed at the command line
module.exports = {
    command: '$0',
    desc: 'Show price data for your favorite stocks',
    builder,
    handler,
};

const FAANG_SYMBOLS = ['FB', 'AAPL', 'AMZN', 'NFLX', 'GOOG'];

/**
 * Builder for the default command
 * 
 * Defines specific options for this command (--url and --token)
 * 
 * @param yargs The yargs object that we can use to define options
 */
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

/**
 * Handler for the default command
 * 
 * Fetches price information about the user's favorite stocks
 * 
 * If no favorites have been set, instead fetches information about popular stocks (FAANG)
 * 
 * @param argv Parsed command-line arguments, provided by yargs
 */
async function handler(argv) {
    let favorites = getFavorites();

    if (!favorites.length) {
        writeNote('No favorite stocks set, showing popular stocks instead');
        favorites = FAANG_SYMBOLS;
    }

    const prices = await getPrices(favorites, argv);

    console.info(createTable(prices));

    // The IEX API omits any invalid stock symbols from the response. If the response has fewer
    // entries than requested, alert the user that invalid symbols were removed
    if (prices.length !== favorites.length) {
        writeNote('Invalid stock symbols have been omitted');
    }
}
