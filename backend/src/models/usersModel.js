const connection = require('./connection')
const Sequelize = require('sequelize')

const Usuario = connection.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Usuario.sync();

// const getAll = async () => {
//     const [ users ] = await connection.execute('SELECT * FROM users')
//     return users
// }

// const getOneUser = async (id) => {
    
//     const query = 'SELECT * FROM users WHERE id = ?'
    
//     const [oneUser] = await connection.execute(query, [id])
//     return oneUser
// }

// const createUser = async (user) => {
//     console.log(user)
    
//     const query = 'INSERT INTO users(name, email, password) VALUES (?, ?, ?)'
//     const [createdUser] = await connection.execute(query, [user.name, user.email, user.password]) 

//     return {inserId: createdUser}

// }

// const deleteTask = async (id) => {
//     const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
//     return removedTask
// }

// const updateTask = async (id, task) => {
//     const { title, status} = task
    
//     const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    
//     const [updateTask] = await connection.execute(query, [title, status, id])
//     return updateTask
// }

module.exports = { Usuario }
    // getAll,
    // createUser,
    // deleteTask,
    // updateTask,
    // getOneUser

