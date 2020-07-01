// Created by Erik Lindstrom
// this is a factory function creates a new task

const createTask = (userId, title, expectCompleteBy, complete) => ({
    
        userId: userId,
        title: title,
        expectCompleteBy: expectCompleteBy,
        complete: complete
    }
)

export default createTask