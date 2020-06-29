import { API, dbResponseData } from "./databaseCalls.js"
import newArticle from "./articles/articleFactory.js"

console.log('Hello World')

//invocing the fetch call from database calls to test it...Brendan
//parameters for API.getData are (url, table, expand)
//to use this, input url, the table you are looking for, and the table you wish to include (probably user)
//example: ("http://localhost:3000", "tasks", "user")
API.getData("http://localhost:3000", "articles", "user").then(
    () => {
        console.log("hello?"),
            dbResponseData.forEach(
                (res) => {
                    console.log(res)

                }
            )
    }
)


//Brendan here testing article factory and post method
//userId, title, description, url, date
let testArticle = newArticle(2, "articleTest2", "another test of article functionality", "https://www.theonion.com/study-finds-gap-widening-between-rich-pets-and-poor-ame-1844134668", "2020-06-29")

//url, table, newObject
API.postData("http://localhost:3000", "articles", testArticle)