// Created by Erik Lindstrom
// this function creates a new task

const createTask = (userId, task, date) => {
    const newMessage = {
        userId: userId,
        task: task,
        date: date
    }
    return newTask
}

export default createTask