const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes = function () { 
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    
    const duplicates = notes.filter( function (note) {
        return note.title === title
    })

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })   
        saveNotes(notes) 
        console.log('New note added.')
    }
   else {
    console.log('Title is already taken...Try with a new one.')
   }
    
}

const saveNotes = function (notes) {
    const dataObject = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataObject)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataObject = dataBuffer.toString()
        return JSON.parse(dataObject)        
    } catch (e) {
        return []
    }
}

const removeNotes = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter( function (note) {
        return note.title !== title
    })

    if (notesToKeep.length < notes.length) {
        console.log(chalk.bgGreen('Note removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.bgRed('No note found.'))
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}