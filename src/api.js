const { StocksError } = require('./error');
const { getToken } = require('./store');
const fetch = require('node-fetch');
const { Spinner } = require('cli-spinner');

module.exports = {
    getPrices,
};

const priceFormatter = Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });
const percentFormatter = Intl.NumberFormat(undefined, { style: 'percent', minimumFractionDigits: 2 });

async function getPrices(symbols) {
    const spinner = new Spinner('Fetching stock price data');
    try {
        spinner.start();
        let res = await fetch(buildPriceUrl(symbols));
        let json = await res.json();

        return Object.values(json).map(data => parseQuote(data.quote));
    } catch {
        throw new StocksError('Unable to fetch stock data', 'Please verify your internet connection and confirm the stock symbols are correct');
    } finally {
        spinner.stop(true);
    }
}

function parseQuote(quote) {
    const diff = quote.latestPrice - quote.previousClose;
    const diffRatio = (diff / quote.previousClose);

    return {
        symbol: quote.symbol,
        price: priceFormatter.format(quote.latestPrice),
        previous: priceFormatter.format(quote.previousClose),
        change: priceFormatter.format(diff),
        percentChange: percentFormatter.format(diffRatio),
        increase: (diff >= 0),
    };
}

// TODO: Update to use the live api instead of the sandbox
function buildPriceUrl(symbols) {
    return `https://sandbox.iexapis.com/v1/stock/market/batch?symbols=${symbols.join(',')}&types=quote&token=${getToken()}`;
}