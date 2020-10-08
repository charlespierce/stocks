const { writeError } = require('./style');

class StocksError {
    constructor(message, cta) {
        this.message = message;
        this.cta = cta;
    }

    toMessage() {
        let message = this.message;

        if (this.cta) {
            message += `\n\n${this.cta}`;
        }

        return message;
    }
}

function errorHandler(msg, err) {
    if (err instanceof StocksError) {
        writeError(err.toMessage());
    } else if (err instanceof Error) {
        console.error(err.toString());
    } else {
        writeError(`${msg}\n\nPass --help to show usage information`);
    }

    process.exit(1);
}

module.exports = {
    errorHandler,
    StocksError,
};
