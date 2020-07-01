import messageConverter from "./messageDOM.js"
import { activeSession } from "../users/loginCalls.js"


const renderMessage = (messages) => {
    for(const message of messages) {  
        if (message.userId !== activeSession.id) {
            // console.log('FRIEND MESSAGE', message)
            const messageHTML = messageConverter(message)
            const chatLog = document.querySelector(".chatLog")
            chatLog.innerHTML += messageHTML
            const hiddenButton = document.querySelector(".chat__editBtn")   
            hiddenButton.style.display = "none";
        }
        else {
            const messageHTML = messageConverter(message)
            const chatLog = document.querySelector(".chatLog")
            chatLog.innerHTML += messageHTML
            // console.log('USER MESSAGE', message) 
        }
    }
}

export default renderMessage



