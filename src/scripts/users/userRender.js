import userConverter from "./userConverter.js"

const renderUser = (user) => {
    const userHTML = userConverter(user)
    const userDisplay = document.querySelector(".userContainer")
    userDisplay.innerHTML += userHTML
}

export default renderUser