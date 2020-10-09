const Configstore = require("configstore");
const { StocksError } = require("./error");

module.exports = {
  getFavorites,
  addFavorites,
  removeFavorites,
  getToken,
  setToken,
  removeToken,
};

let store;

/**
 * Get the local store of data
 *
 * Initializes the store if it hasn't yet been created
 *
 * @return {Configstore} Initialized store of data
 */
function getStore() {
  if (!store) {
    try {
      if (process.env._STOCKS_TEST_CONFIG) {
        store = new Configstore(process.env._STOCKS_TEST_CONFIG);
      } else {
        store = new Configstore("stocks");
      }
    } catch {
      throw new StocksError("Could not load local configuration");
    }
  }

  return store;
}

/**
 * Saves a value to the local store
 *
 * @param {string} key Key under which to store the `value`
 * @param {string} value Data to save in the local store
 */
function setValue(key, value) {
  let store = getStore();
  try {
    store.set(key, value);
  } catch {
    throw new StocksError("Could not save local configuration");
  }
}

/**
 * Get the user's list of favorite stocks
 *
 * @return {string[]} User's favorite list
 */
function getFavorites() {
  return getStore().get("favorites") || [];
}

/**
 * Adds stocks to the user's list of favorites
 *
 * @param {string[]} symbols Stock symbols to add to the list of favorites
 */
function addFavorites(symbols) {
  if (Array.isArray(symbols)) {
    symbols = symbols.map((symb) => symb.toString().toUpperCase());
  } else {
    symbols = symbols.toString().toUpperCase();
  }

  const newFavorites = getFavorites().concat(symbols);
  setValue("favorites", newFavorites);
}

/**
 * Removes stocks from the user's list of favorites
 * @param {string[]} symbols Stock symbols to remove from the list of favorites
 */
function removeFavorites(symbols) {
  if (Array.isArray(symbols)) {
    symbols = symbols.map((symb) => symb.toString().toUpperCase());
  } else {
    symbols = [symbols.toString().toUpperCase()];
  }

  const newFavorites = getFavorites().filter((fav) => !symbols.includes(fav));
  setValue("favorites", newFavorites);
}

/**
 * Fetch the stored API token
 *
 * @return {string} IEX Cloud API Token
 */
function getToken() {
  return getStore().get("token");
}

/**
 * Stores an API token to be used on future API calls
 *
 * @param {string} token IEX Cloud API Token to store
 */
function setToken(token) {
  setValue("token", token);
}

/**
 * Clears the stored API token, if any, so it cannot be used on future calls
 */
function removeToken() {
  setValue("token", null);
}
