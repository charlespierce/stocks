const { removeFavorites, getFavorites } = require('../../store');

module.exports = {
    command: 'remove <symbols..>',
    desc: 'Remove stocks from your list of favorites',
    builder: {},
    handler,
};

/**
 * Handler for the `favorites remove` command
 * 
 * Removes the specified stocks from the user's list of favorites
 * 
 * @param argv Parsed command-line arguments, provided by yargs
 */
function handler(argv) {
    removeFavorites(argv.symbols);

    // Once the favorites have been removed, show the remaining list
    const favorites = getFavorites();
    if (favorites.length) {
        console.info(`Your favorite stocks: ${favorites.join(', ')}`);
    } else {
        console.info('All favorite stocks removed!');
    }
}
