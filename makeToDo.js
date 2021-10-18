//make function that takes text and makes a todo object
const makeToDo = (text) => {
    return {
        text: text,
        isComplete: false,
    }
}

const todo = makeToDo('Walk the dog')
console.log(todo)

module.exports = makeToDo;