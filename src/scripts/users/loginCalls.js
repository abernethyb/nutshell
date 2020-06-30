
import {API, dbResponseData} from "../databaseCalls.js";
import sessionData from "./sessionStorage.js"

const loginCalls = {
    login(username, password) {
        API.getAllUsers() 
        .then (users => {
            console.log(users)
            console.log(username)
            console.log(password)
            users.find(user => {
                if(user.password === password && user.username === username) {
                    console.log("success" , user)
                    window.location.href = "http://localhost:5000/src/"
                    // TODO: redirect index.html here 
                } 
            })
        })
    },
    signUp (newUser) {
        console.log(newUser)
        let duplicateEmail = false;
        let duplicateUsername = false;
        API.getAllUsers()
            .then(users => {
                users.forEach (user => {
                    if(user.email === newUser.email) {
                        alert("Email already in use, please sign in")
                        duplicateEmail = true;
                    } else if (user.username === newUser.username) {
                        alert("Username already in use, please choose a different one")
                        duplicateUsername = true;
                    }
                })
                if (duplicateEmail === false && duplicateUsername === false) {
                    API.saveUser(newUser)
                    .then(user => sessionData.storeUser(user.id))
                    .then(console.log(sessionData))
                }
            })
    }
}

export default loginCalls;