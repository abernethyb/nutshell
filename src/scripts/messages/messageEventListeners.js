import updateChat from ".messageUpdate.js"


const chatLog = document.querySelector(".chatLog")

export default {
    registerAddFriendListener () {
        chatLog.addEventListener("click", event => {
            if (event.target.id.startsWith("addFriend__")) {
                const friendToAdd = event.target.id.split("__")[1]
                console.log('Clicked Add Friend Button')
                // API.postFriend(friendToAdd)
                // .then(() => {
                //     document.querySelector("#entryLog").innerHTML = ""
                //     getData()
                // })
            }
        })
    },
    registerEditListener() {
        chatLog.addEventListener("click", event => {
            if (event.target.id.startsWith("editChat__")) {
                const chatIdToEdit = event.target.id.split("__")[1]
                updateChat(chatIdToEdit)
            }
        })
    }
}