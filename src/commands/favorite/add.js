module.exports = {
    command: 'add <symbols..>',
    desc: 'Add stocks to your list of favorites',
    builder: {},
    handler,
};

function handler(argv) {
    console.log('Running favorite add', argv.symbols);
}
