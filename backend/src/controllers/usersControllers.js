const { validationResult } = require('express-validator');
const usersModel = require('../models/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const { authSecret } = require('../../.envv')

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.errors[0] });
    }
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
    const { id } = req.params
    var dados = req.body
    dados.password = await bcrypt.hash(dados.password, 8)

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

// --------------- Login User --------------- //

const signin = async (req, res) => {
    if(!req.body.email || !req.body.password)  {
        return res.status(400).send('Dados incompletos')
    }

    const user = await usersModel.Usuario.findOne({
        where: {
            email: req.body.email
        },
        
    })

    if(user){ 
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {

            if(err || !isMatch) {
                return res.status(401).send('Senha incorreta')
            }
            
            const payload = { id: user.id }
            res.json({
                name: user.name,
                email: user.email,
                token: jwt.encode(payload, authSecret)
            })
        })  
    } else {
        res.status(400).send('Usuário não encontrado')
    }
}

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser,
    getOneUser,
    signin
}