import { API, dbResponseData } from "./databaseCalls.js"
import messageData from "./messages/messageData.js"
import renderMessage from "./messages/messageList.js"
import sendButton from "./messages/sendButton.js"
import messageButtons from "./messages/messageOptions.js"
import dateString from "./dateStamp.js"
import newArticle from "./articles/articleFactory.js"
import renderArticle from "./articles/articleDOM.js"

// MESSAGE FUNCTIONS
messageData.getAllMessages()
sendButton()
messageButtons.editListener()



renderArticle()
