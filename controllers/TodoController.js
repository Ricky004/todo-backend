const TodoModel = require('../models/TodoModel')

module.exports.getTodo = async (req, res) => {
    try{
        const todo = await TodoModel.find()
        res.send(todo)
    } catch(err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    }
}

module.exports.saveTodo = async (req, res) => {

    const { text, isDone } = req.body

    await TodoModel.create({text, isDone}).then((data) => {
        console.log(data)
        res.send(data)
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Internal Server Error')
    })
    
}

module.exports.updateTodo = async (req, res) => {
    const {_id, text} = req.body

    await TodoModel.findByIdAndUpdate(_id, {text}).then(() => {
        res.send("update Success")
    }).catch((err) => {
       console.log(err)
       res.status(500).send('Internal Server Error')
    })
}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body

    await TodoModel.findByIdAndDelete(_id ).then(() => {
        res.send("delete Success")
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Internal Server Error')
    })
}

module.exports.taskdone = async (req, res) => {
    const {_id, isDone} = req.body

    await TodoModel.findByIdAndUpdate(_id, {isDone}, {new: true}).then(() => {
        res.send("is done")
    }).catch((err) => {
        console.log(err)
        res.status(500).send('Internal Server Error')
    })
}


