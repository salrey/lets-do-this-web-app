const todos = require("./todos");
const readlineSync = require('readline-sync')

const editTodo = (todo) => {
    let symbol = "❎"
    if (todo.isComplete) {
        symbol = "✅"
    }
    console.clear();
    const editMenu = `How would you like to edit the following todo?

${symbol} ${todo.text}

(u) Mark it unfinished.
(d) Mark it done.
(e) Edit the text of the todo.
(d) Delete the todo.
`
    const response = readlineSync.question(editMenu)
    if (response === 'x') {
        todo.isComplete = false;
    } else if (response === 'x') {
        todo.isComplete = false
    }    
    console.clear();
}

module.exports = editTodo;