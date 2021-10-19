const todos = require("./todos");
const readlineSync = require('readline-sync')

const editTodo = (todo) => {
    const symbol = todo.isComplete ? "✅" : "❎"

    console.clear();
    const editMenu = `How would you like to edit the following todo?

${symbol} ${todo.text}

(u) Mark it unfinished.
(d) Mark it done.
(e) Edit the text of the todo.
(x) Delete the todo.
`
    const response = readlineSync.question(editMenu)
    if (response === 'u') {
        todo.isComplete = false;
    } else if (response === 'd') {
        todo.isComplete = true;
    }    
    console.clear();
}

module.exports = editTodo;