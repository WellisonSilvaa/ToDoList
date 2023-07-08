const usersModel = require('../models/usersModel')
const bcrypt = require('bcrypt')

const getAll = async (_req, res) => {

    await usersModel.Usuario.findAll({
        attributes: ['id', 'name', 'email', 'password', 'telefone']
    }).then((users) => {
        return res.json({
            erro: false,
            users
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        })
    })
}

const getOneUser = async (req, res) => {

    const { id } = req.params

    await usersModel.Usuario.findByPk(id).then((user) => {
            return res.json({
                erro: false,
                user: user
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuário encontrado!"
            });
        });
}

const createUser = async (req, res) => {
    var dados = req.body
    dados.password = await bcrypt.hash(dados.password, 8)
    
    await usersModel.Usuario.create(req.body).
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
}

const updateUser = async (req, res) => {
    const { id } = req.body
    await usersModel.Usuario.update(req.body, { where: { id }})
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário editado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não editado!"
            })
        })
}

const deleteUser = async (req, res) => {
    const { id } = req.params

    await usersModel.Usuario.destroy({ where: {id}})
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário apagado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não apagado."
            })
        })

}

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser,
    getOneUser
}