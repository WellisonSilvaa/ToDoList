const validateBody = (req, res, next) => {
    const { body } = req

    if(body.title == undefined) {
        res.status(400).json({ message: 'O campo "title" é obrigatório'})
    }
}

module.exports = {
    validateBody,
}