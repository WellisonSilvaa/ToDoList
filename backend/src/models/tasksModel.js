const connection = require('./connection')

const getAll = async () => {
    const [ tasks ] = await connection.execute('SELECT * FROM tasks')
    return tasks
}

const createTask = async (task) => {

    const { title } = task

    const dateUtc = new Date(Date.now()).toUTCString()

    const [createdTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUtc]) 

    return {inserId: createdTask}

}

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}

const updateTask = async (id, task) => {
    const { title, status} = task
    
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    
    const [updateTask] = await connection.execute(query, [title, status, id])
    return updateTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask

}