// const chalk = require('chalk');
// const validator = require('validator');
const yargs = require('yargs')

/*
    Commands: 
        - add
        - remove
        - read
        - list
*/

yargs
    .usage('Usage: node $0 <command> [options]')
    .command(
        {
            command: 'add',
            describe: 'Add a note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                },
                body: {
                    describe: 'Note body',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler: function (argv) {
                console.log('Added a note');
                console.log('Title:', argv.title);
                console.log('Body:', argv.body);
            }
        })
    .command(
        {
            command: 'remove',
            describe: 'Remove a note',
            handler: function () {
                console.log('Removed a note');
            }
        })
    .command(
        {
            command: 'read',
            describe: 'Read a note',
            handler: function () {
                console.log('Read note');
            }
        })
    .command(
        {
            command: 'list',
            describe: 'List all notes',
            handler: function () {
                console.log('Listed all notes');
            }
        }).argv;