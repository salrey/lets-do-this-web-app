const readlineSync = require('readline-sync')
const getMenu = require('./getMenu')

let response = readlineSync.question(getMenu())

while (response !== "q") {
    response = readlineSync.question(getMenu());
}