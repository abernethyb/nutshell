const url = "http://localhost:8088"

const updateChat = (messageId) => {

    const hiddenEditId = document.querySelector("#editId")
    const date = document.querySelector("#messageDate")
    const entry = document.querySelector("#composeEntry")

    fetch(`${url}/entryLog/${messageId}`)
        .then(response => response.json())
        .then(message => {
            hiddenEditId.value = message.id 
            date.date = message.date
            entry.value = message.mood
        })
}

export default updateChat