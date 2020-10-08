module.exports = {
    command: 'remove <symbols..>',
    desc: 'Remove stocks from your list of favorites',
    builder: {},
    handler,
};

function handler(argv) {
    console.log('Running favorite remove', argv.symbols);
}
