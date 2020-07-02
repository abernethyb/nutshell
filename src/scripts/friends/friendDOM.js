//This module was created by Brendan Abernethy
import { API, dbResponseData } from "../databaseCalls.js"


//function to render events to DOM
const renderFriend = () => {
    //fetch call to get most recent data
    API.getData("http://localhost:3000", "friends", "user").then(
    () => {
            dbResponseData.forEach(
                (res) => {
                    // console.log(res)
                        document.querySelector(".friendOutput").innerHTML += `
                        <div id="friend__${res.id}" class="singleFriend">
            <div class="friend__userDetails">
                <img class="friend__userImage" src="${res.user.image}">
                <div class="friend__name">
                    ${res.user.username}
                </div>
            </div>
            <div class="friendsList__deleteBtn">
                <button id="deleteFriend__${res.id}" class="deleteBtn" type="button">&times;</button>
            </div>
        </div>
                    
                    `
                        }
                    )

                }
            )
}
export default renderFriend