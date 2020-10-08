const { addFavorites, getFavorites } = require('../../store');

module.exports = {
    command: 'add <symbols..>',
    desc: 'Add stocks to your list of favorites',
    builder: {},
    handler,
};

function handler(argv) {
    addFavorites(argv.symbols);

    let favorites = getFavorites();
    console.info(`Your favorite stocks: ${favorites.join(', ')}`);
}
