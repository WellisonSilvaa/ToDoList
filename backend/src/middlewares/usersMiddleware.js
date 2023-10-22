const validateFieldName = (req, res, next) => {
    const { body } = req;

    if(body.name == undefined) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' })
    }

    if(body.name == '') {
        return res.status(400).json({ message: 'O nome não pode ser vazio' })
    }

    next()
}

const validateFieldEmail = (req, res, next) => {
   
    
   
    
    
    const { body } = req;

    if(body.email == undefined) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' })
    }

    if(body.email == '') {
        return res.status(400).json({ message: 'O email não pode ser vazio' })
    }


    next()
}



module.exports = {
    validateFieldName,
    validateFieldEmail
}