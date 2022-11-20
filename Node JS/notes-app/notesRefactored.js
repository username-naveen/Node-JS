const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes =  () => { 
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    
    const duplicates = notes.filter( (note) => note.title === title)

    debugger
    
    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })   
        saveNotes(notes) 
        console.log(chalk.bgGreen.white('New note added.'))
    }
   else {
    console.log(chalk.bgRed.white('Title is already taken...Try with a new one.'))
   }
}

const saveNotes = (notes) => {
    const dataObject = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataObject)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataObject = dataBuffer.toString()
        return JSON.parse(dataObject)        
    } catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen.white('Note removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.bgRed.white('No note found.'))
    }
}

const replaceNotes = (title, body) => {
    const notes = loadNotes()

    notes.forEach( (titles) => {
        if ( titles.title === title) {
            titles.body = body
        }
    });
    saveNotes(notes)
    console.log(chalk.bgYellow.white('Replaced the note.')) 
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach( (titles) => {
        console.log(chalk.blue('/'+titles.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const titleMatch = notes.find( (note) => note.title === title)

    if (!titleMatch) {
        console.log(chalk.bgRed.white('No title match.'))
    }

    else {
        console.log(chalk.green(titleMatch.title) + ':\n\t' + titleMatch.body)
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    replaceNotes: replaceNotes,
    listNotes: listNotes,
    readNote: readNote
}