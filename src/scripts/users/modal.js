


// //get modal element
// const modal = document.getElementById('simpleModal');
// //get open modal button
// const modalBtn = document.getElementById('registrationButton')
// //get close button
// const closeBtn = document.querySelector(".modal__close_bar")
// //listen for open click
// modalBtn.addEventListener('click', openModal);
// //listen for close click
// closeBtn.addEventListener('click', closeModal);

// // function to open
// function openModal () {
//     modal.style.display = 'block';
// }

// // function to open
// function closeModal () {
//     modal.style.display = 'none';
// }



const modalFunction = () => {
    const modal = document.getElementById('regModal');
    const modalBtn = document.getElementById('registrationButton')
    const closeBtn = document.querySelector(".modal__close_bar");
    const registerBtn = document.querySelector("#register")
    const contentHidderButton = document.querySelector("#loginButton")
    const contentHidden = document.querySelector(".main__container")

    contentHidderButton.onclick = function() {
        if ()
        contentHidden.style.display = "block";
    }
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