const validateFieldDesc = (req, res, next) => {
    const { body } = req

    if(body.desc == undefined) {
        return res.status(400).json({ message: 'O campo "desc" é obrigatório'})
    }

    if(body.desc == '') {
        return res.status(400).json({ message: 'A descrição não pode ser vazio'})
    }

    next()
}

const validateFieldEstimate = (req, res, next) => {
    const { body } = req

    if(body.estimate_At == undefined) {
        return res.status(400).json({ message: 'O campo "estimate_At" é obrigatório'})
    }

    if(body.estimate_At == '') {
        return res.status(400).json({ message: 'O estimate_At não pode ser vazio'})
    }

    next()
}

const validateFieldDone = (req, res, next) => {
    const { body } = req;

    if(body.done_At == undefined) {
        return res.status(400).json({ message: 'O campo "done_At" é obrigatório'})
    }

    if(body.done_At == '') {
        return res.status(400).json({ message: 'O done_At não pode ser vazio'})
    }

    next()
}

module.exports = {
    validateFieldDesc,
    validateFieldEstimate,
    validateFieldDone
}