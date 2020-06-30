
import { API, dbResponseData } from "./databaseCalls.js"
import newArticle from "./articles/articleFactory.js"
import renderArticle from "./articles/articleDOM.js"
import session from "./users/sessionStorage.js"

//ref w3 includeHTML 
//pass html page if not current active user in session data

sessionStorage.session.

let isLoggedIn = false;
    if (!isLoggedIn) {
        window.location.href = "http://localhost:5000/src/login"
    } 



console.log('Hello World')

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
