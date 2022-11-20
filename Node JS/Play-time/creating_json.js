const fs = require('fs')

//This is creating a variable that holds objects and values of it. 

// const creds = {
//     name: 'Naveen',
//     login: 'naveen.sci@gmail.in',
//     passcode: 'i forgot my password'
// }

// JSON.stringify is to change the objects to a string type so that it can be formatted as JSON (Java Script Object Notation)

// const dataCreds = fs.writeFileSync('creds.json',JSON.stringify(creds))

const dataBuffer = fs.readFileSync('creds.json')
const dataObject = JSON.parse(dataBuffer)
console.log(dataObject.passcode)

dataObject.name = 'Anjali'
dataObject.passcode = 'How do I know'

const writeFs = fs.writeFileSync('creds.json',JSON.stringify(dataObject))