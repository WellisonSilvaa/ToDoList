const express = require('express')
const router = require('./router')
// const passport = require('./middlewares/passport')


const app = express()

// app.use(passport)
app.use(express.json())
app.use(router)

module.exports = app