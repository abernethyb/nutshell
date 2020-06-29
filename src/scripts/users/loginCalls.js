
import API from "../databaseCalls.js";
import sessionData from "./sessionStorage.js"

export default {
    login(username, password) {
        API.getAllUsers()
            .then (users => users.find(user => {
                if(user.password === password && user.username === username){
                    sessionData.storeUser(user.id)
                    console.log(user)
                }
            }))
    },
    signUp (newUser) {
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