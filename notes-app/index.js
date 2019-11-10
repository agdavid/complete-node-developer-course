// const chalk = require('chalk');
// const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');

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
                notes.addNote(argv.title, argv.body);
            }
        })
    //
    // Challenge: Setup command option and function
    //
    // 1. Setup the remove command to take a required --title option
    // 2. Create and export a removeNote function from notes.js
    // 3. Call removeNote in remove command handler
    // 4. Have removeNote log the title of the note to be removed
    // 5. Test your work using: node app.js remove --title
    .command(
        {
            command: 'remove',
            describe: 'Remove a note',
            builder: {
                title: {
                    describe: 'Note title',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler: function (argv) {
                notes.removeNote(argv.title);
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