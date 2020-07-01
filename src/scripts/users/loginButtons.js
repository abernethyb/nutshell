import loginCalls from "./loginCalls.js";
import { API } from "../databaseCalls.js";
import closeModal from "./modal.js";
import modalFunction from "./modal.js";

//event listeners for buttons on login page
const loginButtons = {
//if they click login then 
login () {
    document.querySelector("#loginButton").addEventListener("click", event =>{
        console.log("login button")
        let username=document.querySelector("#username").value 
        let password=document.querySelector("#password").value
        loginCalls.login(username,password)
        console.log(username, password)
    })
},

register () {
    document.querySelector("#register").addEventListener("click", event => {
        console.log("register working")
        const newUserObj = {}
        console.log(newUserObj)

        newUserObj.email = document.querySelector("#email").value
        newUserObj.username = document.querySelector("#username1").value
        newUserObj.password = document.querySelector("#password1").value
        const password2 = document.querySelector("#password2").value

        if (newUserObj.password!==password2) {
            alert("Your password does not match")
        } else {
            loginCalls.signUp(newUserObj)
            API.getAllUsers()
            .then(users => {
                console.log(users)
            })
        }
    })
}

}

export default loginButtons;

