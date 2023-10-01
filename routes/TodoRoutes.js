const { Router } = require("express")
const { 
    getTodoList, createTodoList, updateTodoList,
    deleteTodoList, getTask, createTask,
    updateTask, deleteTask
} = require("../controllers/TodoController")

const router = Router()

// for the TodoList...
router.get('/todo-lists', getTodoList)
router.post('/todo-lists', createTodoList )
router.put('/todo-lists/:id', updateTodoList)
router.delete('/todo-lists/:id', deleteTodoList)

// for the Tasks...
router.get('/todo-lists/:id/tasks', getTask)
router.post('/todo-lists/:id/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
 

module.exports = router