import messageConverter from "./messageDOM.js"

const renderMessage = (messages) => {
    for(const message of messages) {
        const messageHTML = messageConverter(message)
        const chatLog = document.querySelector(".chatLog")
        chatLog.innerHTML += messageHTML
    }
}

export default renderMessage
