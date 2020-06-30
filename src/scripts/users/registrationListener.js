// import registrationConverter from "./registrationConverter.js"
// import modalFunction from "./login.js"

const registrationListener = () => {
    const button = document.getElementById("registrationButton")
    button.addEventListener("click", clickEvent => {
        console.log('Register Button Clicked')
        // const content = clickEvent.target.value  
        // const regHTML = registrationConverter(content)
        // const element = document.querySelector("#regModal")
        // element.innerHTML = regHTML
        // modalFunction()
        }
    )
}

export default registrationListener