
import {API} from "../databaseCalls.js";
import renderUser from "./userRender.js";
import renderMessageUser from "../messages/composeRender.js"

let activeSession = {}

const loginCalls = {
    login(username, password) {
        API.getAllUsers() 
        .then (users => {
            users.find(user => {
                if(user.password === password && user.username === username) {
                    sessionStorage.removeItem('user');
                    sessionStorage.setItem('user', JSON.stringify(user))
                    console.log(sessionStorage.getItem('user', user))
                    activeSession = user
                    $(".userContainer").empty()
                    renderUser(user)
                    renderMessageUser(user)
                    console.log('ACTIVE USER', activeSession)
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

export { 
    loginCalls,
    activeSession
};
