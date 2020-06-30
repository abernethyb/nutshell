import userConverter from "./userDOM.js"

const renderUser = (user) => {
        const userHTML = userConverter.userEntry(user)
        const userDisplay = document.querySelector(".userContainer")
        userDisplay.innerHTML += userHTML
}

export default renderUser