import sendButton from "./messages/sendButton.js"
import messageButtons from "./messages/messageOptions.js"
import articleEvent from "./articles/articleEventListeners.js"
import modalFunction from "./users/modal.js"
import loginButtons from "./users/loginButtons.js"
import taskEvent from "./tasks/taskEventListeners.js"
import taskData from "./tasks/taskData.js"
import renderEvent from "./events/eventDOM.js"
import eventEvent from "./events/eventEventListeners.js"
import renderFriend from "./friends/friendDOM.js"
import { activeSession } from "./users/loginCalls.js"
import friendEvent from "./friends/friendEventListeners.js"



// MESSAGE FUNCTIONS
sendButton()
messageButtons.editListener()

// REGISTRATION FUNCTIONS
loginButtons.login()
loginButtons.register()
modalFunction()

taskEvent.taskEventListener()
taskData.getAllTasks()
taskEvent.deleteTask()

// ARTICLE FUNCTIONS
//articleEvent is located in articleEventListener.js.  Write article is used to post an article and delete is used to delete.
articleEvent.writeArticle()
articleEvent.deleteArticle()

renderEvent()
eventEvent.writeEvent()
eventEvent.deleteEvent()


// CLICK AND DRAG FRIENDS LIST
var dragItem = document.querySelector(".contentContainer__friendsFloat");
var container = document.querySelector(".mainContainer");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
    } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
    active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e) {
    if (active) {
    
    e.preventDefault();
    
    if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
    } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

renderFriend()
console.log("avtive username and ID", activeSession.userneame, activeSession.id)

friendEvent.makeAFriend()

