const mongoose = require("mongoose")

const TodoListSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
})

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        maxLength: 30,
        minLength: 1,
        require: true,
    },
    complete: {
       type: Boolean,
       default: false,
    },
    date: { 
        type: Date, 
        default: Date.now()
    },
    todoList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoList'
    },
})

module.exports = {
    TodoList: mongoose.model('TodoList', TodoListSchema),
    Task: mongoose.model('Task', TaskSchema),
}
