// import { API, dbResponseData } from "./databaseCalls.js"
import messageData from "./messages/messageData.js"
import sendButton from "./messages/sendButton.js"
import messageButtons from "./messages/messageOptions.js"
import renderArticle from "./articles/articleDOM.js"
import articleEvent from "./articles/articleEventListeners.js"
import modalFunction from "./users/modal.js"
import loginButtons from "./users/loginButtons.js"


// MESSAGE FUNCTIONS
messageData.getAllMessages()
sendButton()
messageButtons.editListener()

// REGISTRATION FUNCTIONS
loginButtons.login()
loginButtons.register()
modalFunction()




//renderArticle is located in articleDom.js.  It is a function that iterates through the articles table in the database and renders them to the DOM
renderArticle()

//articleEvent is located in articleEventListener.js.  It is a function that calls an event listener on the saveArticle button and uses a post method to put user data into the articles table of the database.
articleEvent()




