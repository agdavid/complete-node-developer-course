const fs = require('fs');
const chalk = require('chalk')

module.exports = {
    addNote,
    removeNote,
}

function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(chalk.green("New note added"));
    } else {
        console.log(chalk.red("Note title taken"));
    }
}

function removeNote(title) {
    const notes = loadNotes();

    const locatedNote = notes.filter((note) => {
        return note.title === title;
    })

    if (locatedNote.length === 0) {
        console.log(chalk.red("Note title to remove does not exist"));
    } else {
        console.log(chalk.green("Note title to remove located"));
        console.log(locatedNote[0].title);
    }
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