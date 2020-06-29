import { API, dbResponseData } from "./databaseCalls.js"

console.log('Hello World')

//invocing the fetch call from database calls to test it...Brendan
//parameters for API.getData are (url, table, expand)
API.getData("http://localhost:3000", "friends").then(
    () => {
        console.log("hello?"),
            dbResponseData.forEach(
                (res) => {
                    console.log(res)

                }
            )
    }
)
