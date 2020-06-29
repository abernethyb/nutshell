import {API, dbResponseData} from "./databaseCalls.js"

const saveButton = {
    saveEntry: () => {
        document
        .querySelector("#postMessageButton")
        .addEventListener("click", clickEvent => {
            
            const hiddenEditId = document.querySelector("#editId").value
            console.log(hiddenEditId)
            let message = {}

            message.date = document.querySelector("#messageDate").value
            message.content = document.querySelector("#composeEntry").value

            if (hiddenEditId !== "") {
                document.querySelector("#chatLog").innerHTML = ""
                API.editJournalEntry(hiddenEditId)
                document.querySelector("#messageDate").value = ""
                document.querySelector("#composeEntry").value = ""
                console.log('update')
            }
            else if (message.date !== "" && message.content !== "") {
                document.querySelector("#chatLog").innerHTML = ""
                API.saveJournalEntry(message)
                console.log('new')
            }
            else {
                alert("OOPS!")
            }      
            console.log('Send Button Clicked')
        })
    }
}


export default saveButton