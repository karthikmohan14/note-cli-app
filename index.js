// console.log("starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
// fs.appendFile('greetings.txt', `hello ${user.username} ! you are ${notes.age} !`, (error) => {});

const argv = yargs.argv;
// console.log("yargs : ", argv);
var command = argv._[0];
// console.log(command);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note added');
        notes.logNote(note);
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} notes`);
    allNotes.forEach((note) =>
        notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('note not found');

    }

} else if (command === 'remove') {
    if (notes.removeNote(argv.title)) {
        console.log('note removed');
    } else {
        console.log('no such note to remove');
    }
} else {
    console.log('command not recognised');

}