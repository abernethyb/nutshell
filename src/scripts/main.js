
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

//ref w3 includeHTML 
//pass html page if not current active user in session data


let isLoggedIn = false;
    if (!isLoggedIn) {
        window.location.href = "http://localhost:5000/src/login"
    } else {
        isLoggedIn = true;
        // window.location.href = "http://localhost:5000/src/"
        loginCalls.login
    }

// sessionStorage.setItem('isLoggedIn' , user)
//     console.log(sessionStorage.getItem('isLoggedIn', user))

// MESSAGE FUNCTIONS
messageData.getAllMessages()
sendButton()
messageButtons.editListener()



renderArticle()
//invocing the fetch call from database calls to test it...Brendan
//parameters for API.getData are (url, table, expand)
//to use this, input url, the table you are looking for, and the table you wish to include (probably user)
//example: ("http://localhost:3000", "tasks", "user")
API.getData("http://localhost:3000", "articles", "userId").then(
    () => {
        console.log("hello?"),
            dbResponseData.forEach(
                (res) => {
                    console.log(res)

                }
            )
    }
)


// //Brendan here testing article factory and post method
// //userId, title, description, url, date
// let testArticle = newArticle(2, "articleTest2", "another test of article functionality", "https://www.theonion.com/study-finds-gap-widening-between-rich-pets-and-poor-ame-1844134668", "2020-06-29")

// //url, table, newObject
API.postData("http://localhost:3000", "articles", testArticle)

renderArticle()