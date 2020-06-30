const userConverter = {
    userEntry (obj) {
        const userHTMLRepresentation = 
        `
        <div class="user__profilePicture">
        <img class="mainUserImage" src="/images/userIcon.png">
    </div>
    <div class="user__userName">
        <p>${obj.username} <sup>&#8226;</sup></p>
    </div>
        `
        return userHTMLRepresentation
    }
}

export default userConverter;