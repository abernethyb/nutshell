
import {API, dbResponseData} from "../databaseCalls.js";
import renderUser from "./userList.js";

const loginCalls = {
    login(username, password) {
        API.getAllUsers() 
        .then (users => {
            console.log(username)
            console.log(password)
            users.find(user => {
                if(user.password === password && user.username === username) {
                    console.log("success" , user)
                    sessionStorage.setItem('user', JSON.stringify(user))
                    console.log(sessionStorage.getItem('user', user))
                    // window.location.href = "http://localhost:5000/src/"
                    // TODO: store userID in session storage
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
                    .then 
                }
            })
    }
}

export default loginCalls;