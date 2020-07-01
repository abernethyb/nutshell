//This module was created by Brendan Abernethy
import newEvent from "./eventFactory.js"
import { API } from "../databaseCalls.js"
import renderEvent from "./eventDOM.js"
// import activeUserId from "../sessionData.js"
//import { API, dbResponseData } from "../databaseCalls.js"
import { activeSession } from "../users/loginCalls.js"

const eventInput = () => {
    
        //userId, title, description, url, date
        let userId = activeSession.id
        let title = document.querySelector("#eventName").value
        let location = document.querySelector("#eventLocation").value
        let date = document.querySelector("#eventDate").value
        //userId, title, location, date
        let eventUserInput = newEvent(userId, title, location, date)
        console.log("hellofromEventinput!!", eventUserInput)
        return eventUserInput          
}

const eventEvent = {
    writeEvent () {
        document.querySelector("#saveEvent").addEventListener("click", event => {
            //userId, title, description, url, date
        
            let inputfromEventequery = eventInput()
            // console.log(inputfromEventequery)
        
            API.postData("http://localhost:3000", "events", inputfromEventequery).then(
                () => {
                    document.querySelector(".eventOutput").innerHTML = ""
                   renderEvent()
                }
            )
        
        })
    },
    deleteEvent () {
        document.querySelector(".eventOutput").addEventListener("click", event => {
            console.log(event.target.id)
            if (event.target.id.startsWith("deleteEventBtn__")) {
                const eventToDelete = event.target.id.split("__")[1]
                 console.log(eventToDelete)
                //url, table, ObjectId
                API.deleteData("http://localhost:3000", "events", eventToDelete).then(
                    () => {
                        document.querySelector(".eventOutput").innerHTML = ""
                        renderEvent()
                    }
                )
            }
        })
    }
} 

export default eventEvent