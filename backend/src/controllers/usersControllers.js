const usersModel = require('../models/usersModel')
const bcrypt = require('bcrypt')

const getAll = async (_req, res) => {

    const users = await usersModel.getAll() 
    return res.status(200).json(users)
}

const getOneUser = async (req, res) => {

    const { id } = req.params

    const oneUser = await usersModel.getOneUser(id)
    return res.status(200).json(oneUser)
}

const createUser = async (req, res) => {
    var dados = req.body
    dados.password = await bcrypt.hash(dados.password, 8)
    
    await Usuario.create(req.body).
    then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    })
    
    // const createdUser = await usersModel.createUser(req.body)
    // return res.status(201).json(createdUser)
}

// const deleteTask = async (req, res) => {
//     const { id } = req.params

//     await tasksModel.deleteTask(id)
//     return res.status(204).json()
// }

// const updateTask = async (req, res) => {
//     const { id } = req.params

//     await tasksModel.updateTask(id, req.body)
//     return res.status(204).json()

// }

module.exports = {
    getAll,
    createUser,
    // deleteTask,
    // updateTask,
    getOneUser
}