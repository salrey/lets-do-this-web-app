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
//Implementing CRUD and now implementing OOP via makeToDo methods
    const response = readlineSync.question(editMenu)
    if (response === 'u') {
        // change todo.isComplete = false; to OOP below
        todo.markIncomplete();
    } else if (response === 'd') {
        todo.markComplete();
    } else if (response === 'e') {
        console.clear()
        const text = readlineSync.question('What should we change the text to?\n\n')
        todo.changeText(text);
    } else if (response === "x") {
        todos.forEach((element, i) => {
            if (element.text === todo.text) {
                //remove it using splice since you know the index
                todos.splice(i, 1)
            }
        })
    } 
    console.clear();
}

module.exports = editTodo;