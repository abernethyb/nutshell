

// import activeUserId from "../.js";


const modalFunction = () => {
    const modal = document.getElementById('regModal');
    const modalBtn = document.getElementById('registrationButton')
    const closeBtn = document.querySelector(".modal__close_bar");
    const registerBtn = document.querySelector("#register")
    const contentHidderButton = document.querySelector("#loginButton")
    const contentHidden = document.querySelector(".main__container")

    // // contentHidderButton.onclick = function(activeUserId) {
    // //     if(activeUserId !== "")
    // //     contentHidden.style.display = "block";
    // // }
    modalBtn.onclick = function() {
    modal.style.display = "block";
    }
    closeBtn.onclick = function() {
    modal.style.display = "none";
    }
    registerBtn.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }

}



export default modalFunction