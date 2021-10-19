const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editToDo = require("./editToDos");

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response.toLowerCase() !== "q") {
    if (response === 'e') {
        editToDo();
    } else {
        console.log(chalk.red.bold('Invalid input: ' + response))
    }
    response = readlineSync.question(getMenu());
    console.clear()
}

