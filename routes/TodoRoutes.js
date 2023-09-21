const { Router } = require("express")
const { getTodo, saveTodo, updateTodo, deleteTodo, taskdone } = require("../controllers/TodoController")

const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)
router.put('/isTaskDone', taskdone)

module.exports = router