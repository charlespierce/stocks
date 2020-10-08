const { removeFavorites, getFavorites } = require('../../store');

module.exports = {
    command: 'remove <symbols..>',
    desc: 'Remove stocks from your list of favorites',
    builder: {},
    handler,
};

function handler(argv) {
    removeFavorites(argv.symbols);

    const favorites = getFavorites();
    if (favorites.length) {
        console.info(`Your favorite stocks: ${favorites.join(', ')}`);
    } else {
        console.info('All favorite stocks removed!');
    }
}
