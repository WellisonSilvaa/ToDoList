const express = require('express')

const router = express.Router()

const tasksControllers = require('./controllers/tasksControllers')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksControllers.getAll)
router.get('/tasks/:id', tasksControllers.getOneTask)
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksControllers.createTask)
router.delete('/tasks/:id', tasksControllers.deleteTask)
router.put('/tasks/:id', 
    tasksMiddleware.validateFieldTitle, 
    tasksMiddleware.validateFieldStatus, 
    tasksControllers.updateTask)

module.exports = router