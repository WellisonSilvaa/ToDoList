const express = require('express')

const router = express.Router()

const tasksControllers = require('./controllers/tasksControllers')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const userControllers = require('./controllers/usersControllers')
const usersMiddleware = require('./middlewares/usersMiddleware')

router.get('/tasks', tasksControllers.getAll)
router.get('/tasks/:id', tasksControllers.getOneTask)
router.post('/tasks', 
    tasksMiddleware.validateFieldDesc, 
    tasksMiddleware.validateFieldEstimate,
    tasksMiddleware.validateFieldDone,
    tasksControllers.createTask)
router.delete('/tasks/:id', tasksControllers.deleteTask)
router.put('/tasks/:id', tasksControllers.updateTask)


router.get('/users', userControllers.getAll)
router.get('/users/:id', userControllers.getOneUser)
router.post('/users', 
    usersMiddleware.validateFieldName,
    usersMiddleware.validateFieldEmail,
    userControllers.createUser)
router.delete('/users/:id', userControllers.deleteUser)
router.put('/users/:id', userControllers.updateUser)

module.exports = router