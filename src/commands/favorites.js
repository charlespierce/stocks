// Definition of the `favorites` command
//
// The `builder` tells yargs to define subcommands from the `favorites` directory
module.exports = {
    command: 'favorites <command>',
    desc: 'Manage your favorite stocks',
    builder: (yargs) => yargs.commandDir('favorites'),
    handler: () => { },
};
