const makeToDo = require("./makeToDo");

const todos = [];

const fakeToDo1 = makeToDo('Walk the dog')
const fakeToDo2 = makeToDo('Wash dishes')
fakeToDo2.isComplete = true;
todos.push(fakeToDo1,fakeToDo2)

module.exports = todos;