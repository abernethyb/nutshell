
//function to render tasks to DOM
const taskConverter = (obj) => {
    const taskHTMLRepresentation =
        //fetch call to get most recent data


        //loop to iterate through database response
        `
        <div id="task__${obj.id}" class="singleTask">
            <div class="task__header">
                <h3>${obj.title}</h3>
                    <p class="task__date">${obj.expectCompleteBy}</p>
                    <p class = "complete">${obj.complete}</p>
                    <div class="task__deleteButton">
                        <button id="deleteTaskBtn__${obj.id}" class="deleteBtn" type="button">&times;</button>
                        </div>

            </div>
                        
        </div>
                    
                    `


                    // <p><input type="checkbox" id = "taskComplete" onchange="completeTask()></p>
                    // <p id = "completed" style="display:none">Finished!</p>




    return taskHTMLRepresentation

}
export default taskConverter;

// function completeTask() {
//     let checkBox = document.getElementById("taskComplete")
//     let text = document.getElementById("completed")
//     if (taskComplete.checked == true) {
//         text.style.display = "block"
//     }
//     else {
//         text.style.display = "none"
//     }

// }


// <input type="checkbox" onchange="doSomething(this)">

// function doSomething(element){
//    var isChecked=element.checked;
// 	//do some action if it is checked