const express = require('express')

const tasksControllers = require('./controllers/tasksControllers')

const router = express.Router()

router.get('/tasks', tasksControllers.getAll)

module.exports = router