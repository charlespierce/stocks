const yargs = require('yargs');

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
    .fail(function (msg) {
        console.error(`${msg}

Pass --help to show usage information`);
        process.exit(1);
    })
    .commandDir('commands')
    .argv;
