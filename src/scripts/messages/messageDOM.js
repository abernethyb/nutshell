const messageConverter = (obj) => {
        const messageHTMLRepresentation = 
        `
        <div id="chat__${obj.id}" class="singleChat">
            <div class="chatFloat__left">
                <div class="chat__profilePicture">
                    <img class="chat__userImage" src="./images/userIcon.png">
                </div>
            </div>
            <div class="chatFloat__middle">
                <div class="chatAbove__userName">
                    <h4>${obj.user.username}</h4>
                    
                </div>
                <div class="chatBelow__message">
                    <p class="chat__text">
                        ${obj.content}
                    </p>
                </div>
            </div>
            <div class="chatFloat__right">
                <div class="chat__date">
                    <div class="chatDate__container">
                        <p class="chatDate__text">${obj.date}</p>
                    </div>
                </div>
            <div class="chat__buttonContainer">
                <div class="chatEditButton">
                    <button id="editChat__${obj.id}" class="chat__editBtn" type="button">Edit</button>
                </div>
            </div>
        </div>
    </div>
        `
        return messageHTMLRepresentation
    }


export default messageConverter;