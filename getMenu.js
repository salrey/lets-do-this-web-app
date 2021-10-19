const chalk = require('chalk')
const todos = require('./todos')

const getMenu = () => {
    const todoList = todos.map((todo, i) => {
        
    return `${i + 1}. ${todo.isComplete ? "✅" : "❎"} ${todo.text}`
    }).join('\n')

    const menu = `${chalk.bold.blue('Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter): ')}
${todoList}
(n) Add new todo.
(q) Quit
`
    return menu
}

module.exports = getMenu;