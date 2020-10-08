module.exports = {
    command: 'favorite <command>',
    desc: 'Manage your favorite stocks',
    builder: (yargs) => yargs.commandDir('favorite'),
    handler: () => { },
};
