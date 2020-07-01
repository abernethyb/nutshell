
//function to render tasks to DOM
const taskConverter = (obj) => {
    const taskHTMLRepresentation =
    
            `        
        <div id="task__${obj.id}" class="singleTask">
    <div class="task__header">
        <div class="completeBy">
            <p>Complete by: ${obj.expectCompleteBy}</p>
        </div>
        <div class="taskDeleteButton">
            <button id="deleteTaskBtn__${obj.id}" class="deleteBtn" type="button">&times;</button>
        </div>
    </div> 
    <div class="taskBody">
        <div class="task__checkbox">
            <input type="checkbox" class="checkbox">
        </div>
        <div class="task__description">
            <h3>${obj.title}</h3>
        </div>   
    </div>
</div>            


`








    return taskHTMLRepresentation

}
export default taskConverter;

function completeTask() {
    let checkBox = document.getElementById("taskComplete")
    let text = document.getElementById("completed")
    if (taskComplete.checked == true) {
        text.style.display = "block"
    }
    else {
        text.style.display = "none"
    }

}


// <input type="checkbox" onchange="doSomething(this)">

// function doSomething(element){
//    var isChecked=element.checked;
// 	//do some action if it is checked