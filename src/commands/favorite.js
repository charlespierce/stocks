exports.command = 'favorite <command>';
exports.desc = 'Manage your favorite stocks';
exports.builder = function (yargs) {
    return yargs.commandDir('favorite');
};
exports.handler = function (argv) { };
