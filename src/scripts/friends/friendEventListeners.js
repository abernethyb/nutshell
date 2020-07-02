//add friend button appears beside each usrtid
//userid populates in search and messages
//if click button, then friendFactory is invoked and friends render on dom and db
//when you log in...perhaps you will need to delete friends and then render them


        // friend button
        // <div class="addFriend">
        //     <button id="saveFriend" class="blueBtn" type="button">+ Friend</button>
        // </div>

//This module was created by Brendan Abernethy
import newFriend from "./friendFactory.js"
import { API } from "../databaseCalls.js"
import renderFriend from "./friendDOM.js"
// import activeUserId from "../sessionData.js"
//import { API, dbResponseData } from "../databaseCalls.js"
import { activeSession } from "../users/loginCalls.js"



const friendEvent = {
    makeAFriend () {
        document.querySelector(".contentContainer__middle").addEventListener("click", event => {
            
            if (event.target.id.startsWith("saveFriend__")){
                const friendToAdd = event.target.id.split("__")[1]
                console.log("a new friend!", friendToAdd)
                const friendInput = () => {
    
                    //userId, activeUserId
                    let activeUserId = activeSession.id
                    let userId = friendToAdd
                    console.log(userId)
                    //let userId = 1
                    let friendAdded = newFriend(userId, activeUserId)
                    console.log("hellofromFriendinput!!", friendAdded)
                    return friendAdded          
            }
                
                let inputfromFriendquery = friendInput()
                // console.log(inputfromFriendquery)
            
            API.postData("http://localhost:3000", "friends", inputfromFriendquery).then(
                () => {
                document.querySelector(".friendOutput").innerHTML = ""
                renderFriend()
                //    document.querySelector(".eventValue1").value = ''
                //    document.querySelector(".eventValue2").value = ''
                //    document.querySelector(".eventValue3").value = ''
                }
            )
            }
        })
    
    },
    makeFriendGoAway () {
        document.querySelector(".friendOutput").addEventListener("click", event => {
            console.log(event.target.id)
            if (event.target.id.startsWith("deleteFriend__")) {
                const friendToDelete = event.target.id.split("__")[1]
                 console.log(friendToDelete)
                //url, table, ObjectId
                API.deleteData("http://localhost:3000", "friends", friendToDelete).then(
                    () => {
                        document.querySelector(".friendOutput").innerHTML = ""
                        renderFriend()
                    }
                )
            }
        })
    }
} 

export default friendEvent