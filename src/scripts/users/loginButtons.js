import { loginCalls } from "./loginCalls.js";
import { API } from "../databaseCalls.js";


//event listeners for buttons on login page
const loginButtons = {
//if they click login then 
login () {
    const contentHidden = document.querySelector(".main__container")
    document.querySelector("#loginButton").addEventListener("click", event =>{
        let username=document.querySelector("#username").value 
        let password=document.querySelector("#password").value
        let userDisplay = document.querySelector(".userContainer").innerHTML
        loginCalls.login(username,password)
        console.log(username, password)
        if (username !== "" && password !== "" && userDisplay !== "") {
                    contentHidden.style.display = "block";
        }   
    })
},

register () {
    document.querySelector("#register").addEventListener("click", event => {
        const newUserObj = {}
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

