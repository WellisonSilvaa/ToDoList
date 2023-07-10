const connection = require('./connection')
const Sequelize = require('sequelize')

const Task = connection.define('tasks', {
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
desc: {
    type: Sequelize.STRING,
    allowNull: false
},
estimate_At: {
    type: Sequelize.DATE,
    allowNull: false
},
done_At: {
    type: Sequelize.DATE,
    allowNull: false
}
});

Task.sync();

 module.exports = Task

// const getAll = async () => {
//     const [ tasks ] = await connection.execute('SELECT * FROM tasks')
//     return tasks
// }

// const getOneTask = async (id) => {
    
//     const query = 'SELECT * FROM tasks WHERE id = ?'
    
//     const [oneTask] = await connection.execute(query, [id])
//     return oneTask
// }

// const createTask = async (task) => {

//     const { title } = task

//     const dateUtc = new Date(Date.now()).toUTCString()

//     const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUtc]) 

//     return {inserId: createdTask}

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

// module.exports = {
//     getAll,
//     createTask,
//     deleteTask,
//     updateTask,
//     getOneTask

// }