// console.log('starting notes.js');

const fs = require('fs');

var logNote = (note) => {
    console.log(`note title : ${note.title} body : ${note.body}`);
}

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('./notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        console.log("creating new file for adding notes");
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('./notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('duplicate note already exists');
    }
};
var getAll = () => {
    return fetchNotes();
};
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((notes) => notes.title === title);
    if (filteredNotes.length > 0) {
        return filteredNotes[0];
    } else {
        return false;
    }
};
var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};