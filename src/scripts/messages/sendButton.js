import messageData from "./messageData.js"
import { API, dbResponseData } from "../databaseCalls.js"
import dateString from "../dateStamp.js"
import { activeSession } from "../users/loginCalls.js"

const url = "http://localhost:3000"
const table = "messages"
const expand = "user"

const sendButton = () => {
    document
    .querySelector("#sendButton")
    .addEventListener("click", clickEvent => {
        // hiddenID will populate on edit button click to enable update.
        const hiddenId = document.querySelector("#editId").value
        console.log(hiddenId)

        // Defines the object to be saved
        let message = {}
        message.userId = activeSession.id
        message.content = document.querySelector("#composeEntry").value
        message.date = dateString
        if (hiddenId !== "") {
            document.querySelector("#composeEntry").value = "" 
            API.editData(url, table, hiddenId, message)
            .then(() => {
                $('#chatLog').empty()
                messageData.getAllMessages()
            })
            document.querySelector("#editId").value = ""
            console.log('update')
        }
        else if (message.content !== "") {
            // Clears value from message textarea field
            document.querySelector("#composeEntry").value = "" 
            // Populates the hidden date input with today's date and time
            message.date = dateString
            // Posts message to API
            API.postData(url, table, message)
            .then(() => {
                // Then reloads container with updated data
                $('#chatLog').empty()
                messageData.getAllMessages() 
            })
            console.log('new')
        }
        else {
            window.alert("You didn't write anything.")
        }  
        console.log('Send Button Clicked')
    })
};


export default sendButton