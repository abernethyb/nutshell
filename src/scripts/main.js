
import sendButton from "./messages/sendButton.js"
import messageButtons from "./messages/messageOptions.js"
import renderArticle from "./articles/articleDOM.js"
import articleEvent from "./articles/articleEventListeners.js"
import modalFunction from "./users/modal.js"
import loginButtons from "./users/loginButtons.js"
import taskEvent from "./tasks/taskEventListeners.js"
import taskData from "./tasks/taskData.js"
import renderEvent from "./events/eventDOM.js"
import eventEvent from "./events/eventEventListeners.js"

// MESSAGE FUNCTIONS
sendButton()
messageButtons.editListener()

// REGISTRATION FUNCTIONS
loginButtons.login()
loginButtons.register()
modalFunction()

taskEvent.taskEventListener()
taskData.getAllTasks()
taskEvent.deleteTask()

// ARTICLE FUNCTIONS
//renderArticle is located in articleDom.js.  It is a function that iterates through the articles table in the database and renders them to the DOM
// renderArticle()

//articleEvent is located in articleEventListener.js.  Write article is used to post an article and delete is used to delete.
articleEvent.writeArticle()
articleEvent.deleteArticle()

renderEvent()
eventEvent.writeEvent()
eventEvent.deleteEvent()


// TEST CONSOLE LOGS
// console.log('Active User Id', activeUserId)