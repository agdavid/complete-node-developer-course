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
  .command({
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
    handler(argv) {
      notes.addNote(argv.title, argv.body);
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.removeNote(argv.title);
    }
  })
  .command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      notes.readNote(argv.title);
    }
  })
  .command({
    command: 'list',
    describe: 'List all notes',
    handler() {
      notes.listNotes();
    }
  }).argv;
