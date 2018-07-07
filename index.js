console.log("starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();
// console.log(os.userInfo());

fs.appendFile('greetings.txt', `hello ${user.username} ! you are ${notes.age} !`);
console.log(notes.addNote());;