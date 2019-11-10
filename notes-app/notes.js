const fs = require('fs');
const chalk = require('chalk')

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes,
}

function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note added"));
    } else {
        console.log(chalk.red.inverse("Note title taken"));
    }
}

function removeNote(title) {
    const notes = loadNotes();

    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length > filteredNotes.length) {
        // original array larger than filtered array
        console.log(chalk.green.inverse("Note title to remove located"));
        saveNotes(filteredNotes);
    } else {
        console.log(chalk.red.inverse("Note title to remove does not exist"));
    }
}

function readNote(title) {
    const notes = loadNotes();

    const locatedNote = notes.find((note) => note.title === title);

    if (locatedNote) {
        const noteToRead = locatedNote[0];
        console.log(chalk.green.inverse(`Found the note with ${title}`));
        console.log(noteToRead);
    } else {
        console.log(chalk.red.inverse(`Did not find the note with title: ${title}`));
    }
}

function listNotes() {
    const notes = loadNotes();
    console.log(chalk.inverse('Notes:'));
    notes.forEach((note) => console.log(note));
}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes() {
    try {
        // locate file and return array of note objects
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        // no such file and return empty array
        return [];
    }

}