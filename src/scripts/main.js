import { API, dbResponseData } from "./databaseCalls.js"
import todaysDate from "./messages/todaysDate.js"
import messageData from "./messages/messageData.js"
import renderMessage from "./messages/messageList.js"
import sendButton from "./messages/sendButton.js"

//invocing the fetch call from database calls to test it...Brendan
//parameters for API.getData are (url, table, expand)
//to use this, input url, the table you are looking for, and the table you wish to include (probably user)
//example: ("http://localhost:3000", "tasks", "user")
// API.getData("http://localhost:8088", "tasks", "user")
// .then(() => {
//         console.log("hello?"),
//             dbResponseData.forEach(
//                 (res) => {
//                     console.log(res)

//                 }
//             )
//     }
// )


messageData.getAllMessages()
sendButton()