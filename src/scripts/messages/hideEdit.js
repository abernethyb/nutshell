import { dbResponseData } from "./databaseCalls.js"

const hideEdit = () => {
    let userId = document.querySelector(".userId").innerHTML
    if (userId.userId !== activeSession.id) {
    const hiddenButton = document.querySelector(".chat__buttonContainer")   
    hiddenButton.style.display = "none";
    }
}

export default hideEdit