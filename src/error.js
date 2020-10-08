const chalk = require('chalk');

class StocksError {
    constructor(message, cta) {
        this.message = message;
        this.cta = cta;
    }

    toMessage() {
        let message = `${chalk.red.bold('error:')} ${this.message}`;

        if (this.cta) {
            message += `\n\n${this.cta}`;
        }

        return message;
    }
};

function errorHandler(msg) {
    console.error(`${chalk.red.bold('error:')} ${msg}\n\nPass --help to show usage information`);

    process.exit(1);
};

module.exports = {
    errorHandler,
    StocksError,
};
