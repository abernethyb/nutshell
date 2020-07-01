
const modalFunction = () => {
    const modal = document.getElementById('regModal');
    const modalBtn = document.getElementById('registrationButton')
    const closeBtn = document.querySelector(".modal__close_bar");
    const registerBtn = document.querySelector("#register")

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