const userConverter = (obj) => {
    const userHTML = 
    `
    <div class="user__profilePicture">
            <img class="mainUserImage" src="${obj.image}">
        </div>
        <div class="user__userName">
        <p>${obj.username} <sup>&#8226;</sup></p>
        <a href class="logout">Logout</a>
    </div>
    `
    return userHTML
}


export default userConverter;