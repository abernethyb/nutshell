import loginCalls from "./loginCalls.js";

//event listeners for buttons on login page
const loginButtons = {
//if they click login then 
login () {
    document.querySelector("#loginButton").addEventListener("click", event =>{
        let username=document.querySelector("#username").value 
        let password=document.querySelector("#password").value
        loginCalls.login(username,password)
    })
},

register () {
    document.querySelector("#registrationButton").addEventListener("click", event => {
        const newUserObj = {}

        newUserObj.email = document.querySelector("#email").value
        newUserObj.username = document.querySelector("#username").value
        newUserObj.password = document.querySelector("#password").value
        const password2 = document.querySelector("#password2").value

        if (newUserObj.password!==password2) {
            alert("Your password does not match")
        } else {
            loginCalls.signUp(newUserObj)
        }
    })
}
}

export default loginButtons;
