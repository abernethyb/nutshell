import API from "./databaseCalls.js";
import includeHTML from "./users/includeHTML.js";
import loginButtons from "./users/loginButtons.js"


//ref w3 includeHTML 
//pass html page if not current active user in session data

let activeUser = false;
    if (!activeUser) {
        const main = document.querySelector(".container__login");
        main.innerHTML=``
        includeHTML(main,"login.html","file");
} 
//Do I need an else statement???


// loginButtons.login()
// loginButtons.register()



// invocing the fetch call from database calls to test it...Brendan
// parameters for API.getData are (url, table, expand)
// to use this, input url, the table you are looking for, and the table you wish to include (probably user)
// example: ("http://localhost:3000", "tasks", "user")


// API.getData("http://localhost:3000", "tasks", "user").then(
//     () => {
//         console.log("hello?"),
//             dbResponseData.forEach(
//                 (res) => {
//                     console.log(res)

//                 }
//             )
//     }
// )
