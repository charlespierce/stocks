const { addFavorites, getFavorites } = require('../../store');

module.exports = {
    command: 'add <symbols..>',
    desc: 'Add stocks to your list of favorites',
    builder: {},
    handler,
};

/**
 * Handler for the `favorites add` command
 * 
 * Adds the provided stock symbols into the local store of favorites
 * 
 * @param argv Parsed command-line arguments, provided by yargs
 */
function handler(argv) {
    addFavorites(argv.symbols);

    // Once the favorites have been added, show the full list
    let favorites = getFavorites();
    console.info(`Your favorite stocks: ${favorites.join(', ')}`);
}
