
import { API, dbResponseData } from "./databaseCalls.js"
import messageData from "./messages/messageData.js"
import renderMessage from "./messages/messageList.js"
import sendButton from "./messages/sendButton.js"
import messageButtons from "./messages/messageOptions.js"
import dateString from "./dateStamp.js"
import newArticle from "./articles/articleFactory.js"
import renderArticle from "./articles/articleDOM.js"
import loginButtons from "./users/loginButtons.js";
import loginCalls from "./users/loginCalls.js";
import articleEvent from "./articles/articleEventListeners.js"

//ref w3 includeHTML 
//pass html page if not current active user in session data

if sessionStorage.getItem('user', 'undefined') {
    window.location.href = "http://localhost:5000/src/login"
} else {
    sessionStorage.getItem('user', user)
}

// let isLoggedIn = false;
//     if (!isLoggedIn) {
//         window.location.href = "http://localhost:5000/src/login"
//     } else {
//         isLoggedIn = true;
//         // window.location.href = "http://localhost:5000/src/"
//         loginCalls.login
//     }


// MESSAGE FUNCTIONS
messageData.getAllMessages()
sendButton()
messageButtons.editListener()


//renderArticle is located in articleDom.js.  It is a function that iterates through the articles table in the database and renders them to the DOM
renderArticle()

//articleEvent is located in articleEventListener.js.  It is a function that calls an event listener on the saveArticle button and uses a post method to put user data into the articles table of the database.
articleEvent()




