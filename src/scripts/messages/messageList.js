import messageConverter from "./messageDOM.js"
import { activeSession } from "../users/loginCalls.js"

const renderMessage = (messages) => {
    const chatLog = document.querySelector(".chatLog")
    for(const message of messages) {
        console.log('USER MESSAGE', message)
        const messageHTML = messageConverter(message)
        chatLog.innerHTML += messageHTML     
    }
    if (message.userId === activeSession.id) {
        document.querySelector(".chat__buttonContainer").style.display = "block"
    }

}

export default renderMessage
