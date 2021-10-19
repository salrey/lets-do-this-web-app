//make function that takes text and makes a todo object
//factory function - blueprint of what todo looks like
const makeToDo = (text) => {
    return {
        text: text,
        isComplete: false,
        //function here is a method/ it is a property of that object 
        markComplete: function() {
            this.isComplete = true;
        },

        markIncomplete: function() {
            this.isComplete = false;
        },

        changeText: function(newText) {
            this.text = newText;
        },
    }
}

const todo = makeToDo('Walk the dog')

module.exports = makeToDo;