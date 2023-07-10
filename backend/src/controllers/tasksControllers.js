const Task = require('../models/tasksModel')

const getAll = async (_req, res) => {

    await Task.findAll({
        attributes: ['id', 'desc', 'estimate_At', 'done_At']
    }).then((tasks) => {
        return res.json({
            erro: false,
            tasks
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhuma tarefa encontrada!"
        })
    })
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