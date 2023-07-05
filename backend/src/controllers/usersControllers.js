const usersModel = require('../models/usersModel')

const getAll = async (_req, res) => {

    const users = await usersModel.getAll() 
    return res.status(200).json(users)
}

// const getOneTask = async (req, res) => {

//     const { id } = req.params

//     const oneTask = await tasksModel.getOneTask(id)
//     return res.status(200).json(oneTask)
// }

// const createTask = async (req, res) => {
//     const createdTask = await tasksModel.createTask(req.body)
//     return res.status(201).json(createdTask)
// }

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
    // createTask,
    // deleteTask,
    // updateTask,
    // getOneTask
}