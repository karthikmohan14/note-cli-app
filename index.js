console.log("starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
// fs.appendFile('greetings.txt', `hello ${user.username} ! you are ${notes.age} !`, (error) => {});

const argv = yargs.argv;
console.log("yargs : ", argv);
var command = argv._[0];
console.log(command);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('command not recognised');

}