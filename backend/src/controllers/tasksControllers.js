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

const getOneTask = async (req, res) => {

    const { id } = req.params

    await Task.findByPk(id).then((task) => {
        return res.json({
            erro: false,
            task
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhuma tarefa encontrado"
        })
    })
}

const createTask = async (req, res) => {
        var dados = req.body
        const data = dateUtc = new Date(Date.now()).toUTCString()
        dados.createdAt = data

        await Task.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Tarefa criada com sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao criar a tarefa"
            })
        })
}

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await Task.destroy({ where: { id }})
        .then(() => {
            return res.status(201).json({
                erro: false,
                mensagem: "Tarefa excluída com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao excluir tarefa!"
            })
        })
}

const updateTask = async (req, res) => {
    const {id} = req.params;

    await Task.update(req.body, { where: { id }})
        .then((task) => {
            return res.status(200).json({
                erro: false,
                mensagem: "Tarefa atualizada com sucesso!",
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao atualizar tarefa!"
            })
        })
}

module.exports = {
    getAll,
    getOneTask,
    createTask,
    deleteTask,
    updateTask,
}