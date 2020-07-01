import { activeSession } from "../users/loginCalls.js"

const chatLog = document.querySelector(".chatLog")

const renderMessage = (messages) => {
    messages.forEach(obj => {
        if (obj.userId === activeSession.id) {
            chatLog.innerHTML += 
            `
            <div id="chat__${obj.id}" class="singleChat">
                    <div class="userId" value="${obj.userId}"> </div>
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
        }
        else if (obj.userId !== activeSession.id) {
            chatLog.innerHTML += 
            `
            <div id="chat__${obj.id}" class="singleChat">
                    <div class="userId" value="${obj.userId}"> </div>
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
                    </div>
                </div>
            </div>  
            `
        }
    })
};


export default renderMessage