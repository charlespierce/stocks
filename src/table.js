const Table = require('cli-table');
const chalk = require('chalk');

module.exports = {
    createTable,
};

/**
 * Format stock quote data into a pretty table for display
 * 
 * @param {Array} quotes Array of quotes returned from the `getPrices` function in the `api` module
 */
function createTable(quotes) {
    const table = new Table({
        head: ['Symbol', 'Previous', 'Current', 'Change', '%'],
        colAligns: ['left', 'right', 'right', 'right', 'right'],
        style: {
            head: ['blue', 'bold'],
        }
    });

    const rows = quotes.map(quote => [
        quote.symbol,
        quote.previous,
        quote.price,
        quote.increase ? chalk.green(quote.change) : chalk.red(quote.change),
        quote.increase ? chalk.green(quote.percentChange) : chalk.red(quote.percentChange),
    ]);

    for (row of rows) {
        table.push(row);
    }

    return table.toString();
}