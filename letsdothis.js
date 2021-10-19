const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editToDo = require("./editToDo");
const todos = require('./todos');

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response !== "q") {
    if (!isNaN(response)) {
        editToDo(todos[response - 1])
    } else {
        console.log(chalk.red.bold('Invalid input: ' + response))
    }
    response = readlineSync.question(getMenu());
    console.clear()
}

