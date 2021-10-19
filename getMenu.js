const chalk = require('chalk')
const todos = require('./todos')

const getMenu = () => {
    const todoList = todos.map((todo, i) => {
        let symbol = '❎'
        if (todo.isComplete) {
            symbol = "✅"
        }
        
        return `${i + 1}. ${symbol} ${todo.text}`
    }).join('\n')

    const menu = `${chalk.bold.blue('Choose a todo to edit (by entering its number) or choose an option at the bottom (by letter): ')}
${todoList}
(n) Add new todo.
(q) Quit
`
    return menu
}

module.exports = getMenu;

// function map(arr, callback) {
//     const newArr = []
//     for (let i =0; i < arr.length; i++) {
//         newArr.push(element[i], i)
//     }
//     return newArr
// }

// map(numbers, (x) => x*2)