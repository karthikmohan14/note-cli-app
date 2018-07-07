console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try {
        var noteString = fs.readFileSync('./notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {
        console.log("creating new file for adding notes");
    }
    notes.push(note);
    fs.writeFileSync('./notes-data.json', JSON.stringify(notes));
};
var getAll = () => {};
var getNote = () => {};
var removeNote = () => {};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};