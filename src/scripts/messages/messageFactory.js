const createMessage = (userId, content, date) => {
    const newMessage = {
        userId: userId,
        content: content,
        date: date
    }
    return newMessage
}

export default createMessage