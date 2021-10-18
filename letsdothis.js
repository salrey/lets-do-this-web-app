const readlineSync = require('readline-sync')
const getMenu = require('./getMenu')

//lets clear the terminal instead of having the menu repeat multiple times - console.clear just moves up it doesn't clear, so add this to the loop as well
console.clear()

let response = readlineSync.question(getMenu())

while (response.toLowerCase() !== "q") {
    console.log('Invalid input: ' + response)
    response = readlineSync.question(getMenu());
    console.clear()
}

