const readlineSync = require('readline-sync')
const chalk = require('chalk')
const getMenu = require('./getMenu')
const editToDo = require("./editToDo");
const todos = require('./todos');
const makeToDo = require('./makeToDo');

console.clear()
let response = readlineSync.question(getMenu()).toLowerCase()

while (response !== "q") {
    if (!isNaN(response)) {
        editToDo(todos[response - 1])
    } else if (response === "n") {
        console.clear()
        const text = readlineSync.question("What task to you want to add?\n\n")
        const todo = makeToDo(text);
        todos.unshift(todo)
    } else {
        console.log(chalk.red.bold('Invalid input: ' + response))
    }
    response = readlineSync.question(getMenu());
    console.clear()
}

