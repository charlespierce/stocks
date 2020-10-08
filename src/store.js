const Configstore = require('configstore');
const { StocksError } = require('./error');

module.exports = {
    getFavorites,
    addFavorites,
    removeFavorites,
    getToken,
    setToken,
    removeToken,
};

let store;
function getStore() {
    if (!store) {
        try {
            store = new Configstore('stocks');
        } catch (err) {
            throw new StocksError('Could not load local configuration');
        }
    }

    return store;
}

function setValue(key, value) {
    let store = getStore();
    try {
        store.set(key, value);
    } catch (err) {
        throw new StocksError('Could not save local configuration');
    }
}

function getFavorites() {
    return getStore().get('favorites') || [];
}

function addFavorites(symbols) {
    if (Array.isArray(symbols)) {
        symbols = symbols.map(symb => symb.toString().toUpperCase());
    } else {
        symbols = symbols.toString().toUpperCase();
    }

    const newFavorites = getFavorites().concat(symbols);
    setValue('favorites', newFavorites);
}

function removeFavorites(symbols) {
    if (Array.isArray(symbols)) {
        symbols = symbols.map(symb => symb.toString().toUpperCase());
    } else {
        symbols = [symbols.toString().toUpperCase()];
    }

    const newFavorites = getFavorites().filter(fav => !symbols.includes(fav));
    setValue('favorites', newFavorites);
}

function getToken() {
    return getStore().get('token');
}

function setToken(token) {
    setValue('token', token);
}

function removeToken() {
    setValue('token', null);
}
