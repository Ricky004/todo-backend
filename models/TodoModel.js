const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true,
        maxLength: 30,
        minLength: 1
    },
    isDone: {
       type: Boolean,
       default: false,
    }
})

module.exports = mongoose.model('Todo', todoSchema)