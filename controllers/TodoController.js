const {TodoList, Task} = require("../models/TodoModel")


// for TodoLists
module.exports.getTodoList = async (req, res) => {
    try{
        const todoLists = await TodoList.find()
        res.send(todoLists)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.createTodoList = async (req, res) => {
    try {
       const todoList = new TodoList(req.body)
       await todoList.save()
       res.send(todoList)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.updateTodoList = async (req, res) => {

    try {
        const todoList = await TodoList.findByIdAndUpdate( req.params.id, req.body)
        res.send(todoList)
    } catch (err) {
       console.log(err)
       res.status(500).send('Internal Server Error')
    }
}

module.exports.deleteTodoList = async (req, res) => {
    try {
        const todoList = await TodoList.findByIdAndDelete(req.params.id)
        res.send(todoList)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

// for tasks
module.exports.getTask = async (req, res) => {
    try {
        const task = await Task.find({ todoList: req.params.id })
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.createTask = async (req, res) => {
    try {
        const task = new Task({ 
            todoList: req.params.id,
            ...req.body,
        })
        await task.save()
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate( req.params.id, req.body )
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete( req.params.id )
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

