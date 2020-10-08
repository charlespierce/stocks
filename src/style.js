const chalk = require('chalk');

module.exports = {
    writeNote,
    writeError,
};

function writeNote(msg) {
    console.info(`${chalk.cyan('node:')} ${msg}`);
}

function writeError(msg) {
    console.error(`${chalk.red.bold('error:')} ${msg}`);
}