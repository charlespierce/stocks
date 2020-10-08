const yargs = require('yargs');
const { errorHandler, StocksError } = require('./error');

try {
    yargs
        .scriptName('stocks')
        .option('token', {
            alias: 't',
            type: 'string',
            description: 'IEX Cloud API Token to use to fetch data',
        })
        .option('url', {
            alias: 'u',
            type: 'string',
            description: 'Base URL to use for API requests',
        })
        .help('help', 'Show this help and exit')
        .version('version', 'Show version and exit')
        .strict()
        .wrap(Math.min(100, yargs.terminalWidth()))
        .fail(errorHandler)
        .commandDir('commands')
        .argv;
} catch (err) {
    if (err instanceof StocksError) {
        console.error(err.toMessage());
        process.exit(1);
    } else {
        throw err;
    }
}
