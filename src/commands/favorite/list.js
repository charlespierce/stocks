module.exports = {
    command: 'list',
    desc: 'Show the list of your favorite stocks',
    builder: {},
    handler,
};

function handler(argv) {
    console.log('Running favorite list');
}
