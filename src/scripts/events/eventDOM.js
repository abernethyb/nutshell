

// const eventConverter = {
//     eventEntry (obj) {
//         const eventHTMLRepresentation = 
//         `
//         <div id="event__${obj.id}" class="singleEvent">
//             <div class="event__header">
//                 <div class="event__name">
//                 <h4>${obj.title}</h4>
//                     <button id="deleteEventBtn__${obj.id}" class="deleteBtn" type="button">&times;</button>
//                 </div>    
//             </div>
//         <div class="event__details">
//             <dl>
//                 <dt>HOST</dt>
//                     <dd>${obj.user.userId}</dd>
//                 <dt>WHEN</dt>
//                     <dd>${obj.date}</dd>
//                 <dt>WHERE</dt>
//                     <dd>${obj.location}</dd>
//             </dl>
//             </div>
//         </div>
//         `
//         return eventHTMLRepresentation
//     }
// }

// export default eventConverter;


//This module was created by Brendan Abernethy
import { API, dbResponseData } from "../databaseCalls.js"


//function to render articles to DOM
const renderEvent = () => {
    //fetch call to get most recent data
    API.getData("http://localhost:3000", "events", "user").then(
    () => {
        // console.log("hello from articleDOM! Hello?"),
        //loop to iterate through database response
            dbResponseData.forEach(
                (res) => {
                    // console.log(res)
                        document.querySelector(".articleOutput").innerHTML += `
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