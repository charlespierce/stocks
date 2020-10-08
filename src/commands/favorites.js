module.exports = {
    command: 'favorites <command>',
    desc: 'Manage your favorite stocks',
    builder: (yargs) => yargs.commandDir('favorites'),
    handler: () => { },
};
