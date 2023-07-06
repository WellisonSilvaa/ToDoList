// const mysql = require('mysql2/promise')
const Sequelize = require('sequelize')


require('dotenv').config()

const connection = new Sequelize(
    process.env.MYSQL_DB, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})

// console.log(process.env.MYSQL_HOST)
// console.log(process.env.MYSQL_USER)
// console.log(process.env.MYSQL_PASSWORD)
// console.log(process.env.MYSQL_DB)

// const connection = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB
// })

connection.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

module.exports = connection