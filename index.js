console.log("starting app");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
// fs.appendFile('greetings.txt', `hello ${user.username} ! you are ${notes.age} !`, (error) => {});
// console.log(process.argv);
var command = process.argv[2];
console.log(command);