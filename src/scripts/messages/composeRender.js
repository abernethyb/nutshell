


const renderMessageUser = (user) => {
    const userHTML = 
    `
        <img class="messageInput__userImage" src="${user.image}"></img>
    `
    const userDisplay = document.querySelector(".messageInput__profilePicture")
    userDisplay.innerHTML += userHTML
}

export default renderMessageUser

