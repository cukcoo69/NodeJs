const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { describe, argv } = require('yargs')
const { listNote, editNote } = require('./notes.js')

// Custumize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {// use to build content from input argument in command line 
        title: {
            describe: 'Note title',
            demandOption: true,//set up that have to have fiel title in command argument
            type: 'string'// set up type of title
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
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
        notes.removeNote(argv.title)
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        listNote()
    }
})

// Read command
yargs.command({
    command: 'edit',
    describe: 'Edit a note',
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
        notes.editNote(argv.title, argv.body)
    }
})

yargs.parse()//cái này để gọi ra yargs để xử lý các dữ liệu truyền vào, yark.argv cũng làm được
// console.log(yargs.argv)
