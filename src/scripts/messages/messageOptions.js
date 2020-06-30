import updateChat from "./messageUpdate.js"


const chatLog = document.querySelector(".chatLog")


const messageButtons = {
    addFriendListener () {
        chatLog.addEventListener("click", event => {
            if (event.target.id.startsWith("addFriend__")) {
                const friendToAdd = event.target.id.split("__")[1]
                console.log('Clicked Add Friend Button')
                
            }
        })
    },
    editListener: () => {
        chatLog.addEventListener("click", event => {
            if (event.target.id.startsWith("editChat__")) {
                const chatIdToEdit = event.target.id.split("__")[1]
                updateChat(chatIdToEdit)
            }
            console.log(`Edit Button Clicked`)
        })
    }
}









export default messageButtons