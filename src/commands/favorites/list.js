const { getFavorites } = require('../../store');

module.exports = {
    command: 'list',
    desc: 'Show the list of your favorite stocks',
    builder: {},
    handler,
};

function handler() {
    const favoriteList = getFavorites();
    if (favoriteList.length) {
        console.info(`Your favorite stocks: ${favoriteList.join(', ')}`);
    } else {
        console.info(`You don't have any favorite stocks!

Add some stocks to your favorite list with \`stocks favorite add <symbols..>\``);
    }
}
