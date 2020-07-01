//This module was created by Brendan Abernethy
import { API, dbResponseData } from "../databaseCalls.js"


//function to render events to DOM
const renderEvent = () => {
    //fetch call to get most recent data
    API.getData("http://localhost:3000", "events", "user").then(
    () => {
        // console.log("hello from eventDOM! Hello?"),
        //loop to iterate through database response
            //console.log("unsorted events", dbResponseData)
            dbResponseData.sort((a, b) => {
                return a.date - b.date;
              })
           // console.log("sorted events", dbResponseData)
            dbResponseData.forEach(
                (res) => {
                    // console.log(res)
                        document.querySelector(".eventOutput").innerHTML += `
                        <div id="event__${res.id}" class="singleEvent">
                        <div class="event__header">
                            <div class="event__name">
                            <h4>${res.title}</h4>
                                <button id="deleteEventBtn__${res.id}" class="deleteBtn" type="button">&times;</button>
                            </div>    
                        </div>
                    <div class="event__details">
                        <dl>
                            <dt>HOST</dt>
                                <dd>${res.user.username}</dd>
                            <dt>WHEN</dt>
                                <dd>${res.date}</dd>
                            <dt>WHERE</dt>
                                <dd>${res.location}</dd>
                        </dl>
                        </div>
                    </div>
                    
                    `
                        }
                    )

                }
            )
    

    
    
}
export default renderEvent