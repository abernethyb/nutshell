
import loginButtons from "./users/loginButtons.js"

//get modal element
const modal = document.getElementById('simpleModal');
//get open modal button
const modalBtn = document.getElementById('registrationButton')
//get close button
const closeBtn = document.querySelector(".modal__close_bar")
//listen for open click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open
function openModal () {
    modal.style.display = 'block';
}

// function to open
function closeModal () {
    modal.style.display = 'none';
}


loginButtons.login()
loginButtons.register()

export default closeModal;