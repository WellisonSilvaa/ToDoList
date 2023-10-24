const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()

const tasksControllers = require('./controllers/tasksControllers')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

const userControllers = require('./controllers/usersControllers')
const usersMiddleware = require('./middlewares/usersMiddleware')

const usersModel = require('./models/usersModel')

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
// Create User
router.post('/users',
//Data Validation
body('email').trim().notEmpty().withMessage('Campo email Vazio'),
body('email').isEmail().withMessage('Email Inválido'),
body('email').custom(async emailBody => {
    console.log('email da req',emailBody)
    const user = await usersModel.Usuario.findOne({ 
            where: {
                email: emailBody
            }
        })
        if(user) {
            console.log(user.dataValues.email, " = ", emailBody)
            return Promise.reject('Email já cadastrado')
        }
    }),
    body('name').trim().notEmpty().withMessage('Nome Inválido'),
    userControllers.createUser)
    router.delete('/users/:id', userControllers.deleteUser)
    router.put('/users/:id', userControllers.updateUser)
    // ----- Rota de Login ----- //
    router.post('/signin' , userControllers.signin)
    
module.exports = router