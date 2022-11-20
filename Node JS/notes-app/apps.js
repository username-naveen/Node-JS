const chalk = require('chalk')
const yargs = require('yargs')
// const notes = require('./notes.js')
const notes = require('./notesRefactored.js')

// yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a note.',
    builder: {
        title: {
            describe: 'Title Here',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Description',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv) { 
        //or
    handler(argv){
        console.log('Adding a note...')
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note.',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Removing a note...')
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note.',
    handler(){
        console.log('Listing all note(s)...')
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note.',
    builder: {
        title: {
            describe: 'Title here',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Reading a note...')
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: "replace",
    describe: "replace a note",
    builder: {
        title: {
            describe: 'Title here',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Replacing note here',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Replacing a note...')
        notes.replaceNotes(argv.title, argv.body)
    }
})

yargs.parse()